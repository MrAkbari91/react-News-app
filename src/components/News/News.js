import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from 'flowbite-react';

export default class News extends Component {
  TitleCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static defaultProps = {
    country: 'in',
    pageSize: 20,
    category: 'general',
    api_Key: 'ad43284cea444327832f0de1a4292f24'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    api_Key: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      articles: [],
      page: 1,
      totalResults: 0
    }
    document.title = `${this.TitleCase(this.props.category)} - News Valuation`
  }


  // let url = 'https://newsdata.io/api/1/news?api_Key=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in';   limit = 200
  // let url = 'https://newsapi.org/v2/top-headlines?country=in&api_Key=ad43284cea444327832f0de1a4292f24';      limit = 100
  // let url = 'https://newsapi.org/v2/top-headlines?country=in&api_Key=d093053d72bc40248998159804e0e67d';      2nd limit = 100

  /* 
    async updateNews() {
      let url = `https://newsdata.io/api/1/news?apikey=${this.props.api_Key}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.results,
        totalResults: parsedData.totalResults,
        loading: false,
      })
    }

    fetchMoreData = async () => {
      this.setState({ page: this.state.page + 1 })
      let url = `https://newsdata.io/api/1/news?apikey=${this.props.api_Key}&country=${this.props.country}&category=${this.props.category}&page=${this.state.page}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let json = await data.json();
      this.setState({
        articles: this.state.articles.concat(json.results),
        totalResults: json.totalResults,
        loading: false
      })
    }
   */

  // ========================================================================================================================================================================================================
  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_Key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_Key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let json = await data.json()
    this.setState({
      articles: this.state.articles.concat(json.articles),
      totalResults: json.totalResults
    })
  };
  async componentDidMount() {
    this.updateNews();
  }

  render() {
    console.log('render');
    return (
      <div className='container mx-auto'>
        <h1 className='text-5xl font-semibold py-4 text-center'>News Valuation {this.TitleCase(this.props.category)} Headlines</h1>

        {this.state.loading && <div className='text-center'><Spinner /></div>}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<div className='text-center'><Spinner /></div>}
        >

          <div className='flex flex-wrap'>
            {this.state.articles.map((element) => {
              return (<div className='sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4'>
                {/* newsapi */}
                <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.urlToImage} publishedAt={element.publishedAt} link={element.url} source={element.source.name} />

                {/* newsdata */}
                {/* <NewsItem key={element.link} title={element.title} description={element.description} imgurl={element.image_url} publishedAt={element.pubDate} link={element.link} /> */}

              </div>)
            })}
          </div>

        </InfiniteScroll>
      </div>
    )
  }
}