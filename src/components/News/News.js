import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'flowbite-react';

export default function News(props) {

  const TitleCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  //   document.title = `${this.TitleCase(props.category)} - News Valuation`

  // const api_Key = 'ad43284cea444327832f0de1a4292f24'
  // const api_Key ='d093053d72bc40248998159804e0e67d'
  const api_Key ='4f8bc7f18b1946cd9d502ea18f6b5ffe'
  // const api_Key = 'pub_15464e0c79fbf2f2e24013532c7788dbeb006'
  // const api_Key ='pub_15761798c8ba1de40eebb210f7a77a9a250e5'

  // let url = 'https://newsdata.io/api/1/news?api_Key=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in';   limit = 200
  // let url = 'https://newsapi.org/v2/top-headlines?country=in&api_Key=ad43284cea444327832f0de1a4292f24';      limit = 100
  // let url = 'https://newsapi.org/v2/top-headlines?country=in&api_Key=d093053d72bc40248998159804e0e67d';      2nd limit = 100


  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=${api_Key}&country=${props.country}&category=${props.category}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()

    setArticles(parsedData.results)
    setLoading(false)
    setPage(parsedData.nextPage)
    setTotalResults(parsedData.totalResults)
  }

  const fetchMoreData = async () => {

    let url = `https://newsdata.io/api/1/news?apikey=${api_Key}&country=${props.country}&category=${props.category}&page=${page}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();

    setPage(parsedData.nextPage)
    setArticles(articles.concat(parsedData.results))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }


  // ========================================================================================================================================================================================================


  // const updateNews = async () => {
  //   props.setProgress(10);
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api_Key}&page=${page}`;
  //   setLoading(true);
  //   let data = await fetch(url);
  //   props.setProgress(30);
  //   let parsedData = await data.json()
  //   props.setProgress(70);

  //   setArticles(parsedData.articles)
  //   setTotalResults(parsedData.totalResults)
  //   setLoading(false)
  //   props.setProgress(100);
  // }

  // const fetchMoreData = async () => {
  //   setPage(page + 1)
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${api_Key}&page=${page}`;
  //   let data = await fetch(url,);
  //   let json = await data.json()
  //   setArticles(articles.concat(json.articles))
  //   setTotalResults(totalResults)
  // };



  useEffect(() => {
    updateNews();
  }, [])


  return (
    <div className='container mx-auto'>
      <h1 className='text-5xl font-semibold py-4 text-center'>News Valuation {TitleCase(props.category)} Headlines</h1>

      {loading && <div className='text-center'><Spinner /></div>}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div className='text-center'><Spinner /></div>}
      >

        <div className='flex flex-wrap'>
          {articles.map((element) => {
            return (<div className='sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
              {/* newsapi */}
              {/* <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.urlToImage} publishedAt={element.publishedAt} link={element.url} source={element.source.name} /> */}

              {/* newsdata */}
              <NewsItem key={element.link} title={element.title} description={element.description} imgurl={element.image_url} publishedAt={element.pubDate} link={element.link} source={element.source_id} />

            </div>)
          })}
        </div>

      </InfiniteScroll>
    </div>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 20,
  category: 'general',
  api_Key: 'd093053d72bc40248998159804e0e67d'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  api_Key: PropTypes.string,
}