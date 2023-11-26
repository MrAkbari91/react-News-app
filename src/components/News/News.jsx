import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
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

  const api_Key = 'pub_15761798c8ba1de40eebb210f7a77a9a250e5'

  const language = localStorage.getItem('selectedLanguage')

  const updateNews = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=${api_Key}&country=${props.country}&category=${props.category}&language=${language}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json()

    setArticles(parsedData.results)
    setLoading(false)
    setPage(parsedData.nextPage)
    setTotalResults(parsedData.totalResults)
  }

  const fetchMoreData = async () => {

    let url = `https://newsdata.io/api/1/news?apikey=${api_Key}&country=${props.country}&category=${props.category}&language=${language}&page=${page}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();

    setPage(parsedData.nextPage)
    setArticles(articles.concat(parsedData.results))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  }

  useEffect(() => {
    updateNews();
  }, [])


  return (
    <div className='container mx-auto'>

      <h1 className='text-5xl font-semibold py-4 text-center capitalize'>Top {props.category} Headlines</h1>

      {loading && <div className='text-center'><Spinner /></div>}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<div className='text-center'><Spinner /></div>}
      >

        <div className='flex flex-wrap'>
          {articles.map((element, index) => {
            return (<div className='sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>

              <NewsItem key={index} title={element.title} description={element.description} imgurl={element.image_url} publishedAt={element.pubDate} link={element.link} source={element.source_id} />

            </div>)
          })}
        </div>

      </InfiniteScroll>
    </div>
  )
}
