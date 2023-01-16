import { Spinner } from 'flowbite-react';
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {
  TitleCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      articles: [],
      page: 1,
      totalResults: 0
    }
    document.title = `${this.TitleCase(this.props.category)} - News Valuation`
  }
  // let url = 'https://newsdata.io/api/1/news?apikey=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in';   limit = 200
  // let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ad43284cea444327832f0de1a4292f24';      limit = 100
  // let url = 'https://api.publicapis.org/entries';

  // async updateNews(pageNo) {
  //   const url = `https://newsdata.io/api/1/news?apikey=${this.props.apiKey}&country=${this.props.country}&category=${this.props.category}`;

  // }



  
//   async updateNews() {
//     let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
//     this.setState({ loading: true })
//     console.log(url);
//     let data = await fetch(url);
//     console.log(data);
//     let json = await data.json();
//     console.log(json);
//     this.setState({
//         articles: json.results,
//         totalResults: json.totalResults,
//         loading: false
//     })
// }
// fetchMoreData = async () => {
//     console.log(this.state.page)
//     this.setState({ page: this.state.page + 1 })
//     console.log(this.state.page)
//     let url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}`;
//     this.setState({ loading: true })
//     let data = await fetch(url);
//     let json = await data.json();
//     this.setState({
//         articles: this.state.articles.concat(json.results),
//         totalResults: json.totalResults,
//         loading: false
//     })
// }



  // ========================================================================================================================================================================================================
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let json = await data.json();
    this.setState({
      articles: json.articles,
      totalResults: json.totalResults,
      loading: false
    })
  }
  fetchMoreData = async () => {
    console.log(this.state.page)
    this.setState({ page: this.state.page + 1 })
    console.log(this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let json = await data.json();
    this.setState({
      articles: this.state.articles.concat(json.articles),
      totalResults: json.totalResults,
      loading: false
    })
  }


  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <div className='container mx-auto'>
        <h1 className='text-5xl font-semibold py-4 text-center'>News Valuation {this.TitleCase(this.props.category)} Headlines</h1>
        {/* {this.state.loading && }*/}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<div className='text-center'><Spinner /></div>}
        >
          <div className='flex flex-wrap'>
            {this.state.articles.map((element) => {
              return (
                <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.urlToImage} publishedAt={element.publishedAt} link={element.url} source={element.source.name} />   // imgurl={element.urlToImage}  publishedAt={element.publishedAt} link={element.url} // newsapi
                // <NewsItem key={element.link} title={element.title} description={element.description} imgurl={element.image_url} publishedAt={element.pubDate} link={element.link} />
              )
            })}
          </div>

        </InfiniteScroll>
      </div>
    )
  }
}


News.defaultProps  = {
  country: 'in',
  pageSize: 20,
  category: 'top',
  apiKey: 'ad43284cea444327832f0de1a4292f24'
}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.string
}