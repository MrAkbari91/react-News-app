import { Spinner } from 'flowbite-react';
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  // newsappi
  // {
  //   'source': {
  //   'id': null,
  //   'name': 'NDTV News'
  //   },
  //   'author': null,
  //   'title': '\'Distressing Images Of Injured Cricketer\': TV Channels Warned On Reportage - NDTV',
  //   'description': 'The government on Monday termed the television news coverage of cricketer Rishabh Pant's road accident and some other crime stories \'distasteful\' and \'heart-wrenching\'.',
  //   'url': 'https://www.ndtv.com/india-news/rishabh-pant-crash-crime-story-coverage-distasteful-centre-to-tv-channels-3676254',
  //   'urlToImage': 'https://c.ndtvimg.com/2022-12/r3lvhg7_rishabh-pant_625x300_30_December_22.jpg',
  //   'publishedAt': '2023-01-09T10:26:00Z',
  //   'content': 'The ministry has \'strongly advised\' television channels to attune their systems.\r\nNew Delhi'
  //   }

  constructor() {
    super();
    this.state = {
      loading: false,
      articles: [],
      page: 1
    }
  }

  // let url = 'https://newsdata.io/api/1/news?apikey=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in';   limit = 200
  // let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=ad43284cea444327832f0de1a4292f24';      limit = 100
  // let url = 'https://api.publicapis.org/entries';

  async componentDidMount() {
    let url = `https://newsdata.io/api/1/news?apikey=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in&page=1`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let json = await data.json();
    this.setState({
      articles: json.results,
      totalResults: json.totalResults,
      loading: false
    })
    console.log(json);
  }
  pevbtnclick = async () => {
    let url = `https://newsdata.io/api/1/news?apikey=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in&page=${this.state.page - 1}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let json = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: json.results,
      totalResults: json.totalResults,
      loading: false
    })
    console.log(url);
  }
  nextbtnclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {

    } else {
      let url = `https://newsdata.io/api/1/news?apikey=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in&page=${this.state.page + 1}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let json = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: json.results,
        totalResults: json.totalResults,
        loading: false
      })
    console.log(url);
    }
  }

  // ========================================================================================================================================================================================================

  // async componentDidMount() {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ad43284cea444327832f0de1a4292f24&page=1&pageSize=20`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let json = await data.json();
  //   this.setState({ 
  //     articles: json.articles,
  //     totalResults: json.totalResults,
  //     loading: false 
  //   })
  // }
  // pevbtnclick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ad43284cea444327832f0de1a4292f24&page=${this.state.page - 1}&pageSize=20`;
  //   this.setState({loading:true})
  //   let data = await fetch(url);
  //   let json = await data.json();
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: json.articles,
  //     totalResults: json.totalResults,
  //     loading: false
  //   })
  //   console.log(url);
  // }
  // nextbtnclick = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ad43284cea444327832f0de1a4292f24&page=${this.state.page + 1}&pageSize=20`;
  //     this.setState({loading:true})
  //     let data = await fetch(url);
  //     let json = await data.json();
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: json.articles,
  //       totalResults: json.totalResults,
  //       loading: false
  //     })
  //   console.log(url);

  //   }
  // }
  render() {
    return (
      <div className='container mx-auto'>
        {this.state.loading && <div className='text-center h-screen'><Spinner /></div>}
        <div className='flex flex-wrap -mx-4'>
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              // <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.urlToImage} publishedAt={element.publishedAt} link={element.url} />   // imgurl={element.urlToImage}  publishedAt={element.publishedAt} link={element.url} // newsapi
              <NewsItem key={element.link} title={element.title} description={element.description} imgurl={element.image_url} publishedAt={element.pubDate} link={element.link} />   // imgurl={element.urlToImage}  publishedAt={element.publishedAt} link={element.url} // newsapi
            )
          })}
          <div className='container my-3 w-full md:w-1/2 lg:w-1 flex justify-between'>

            <button onClick={this.pevbtnclick} disabled={this.state.page <= 1} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center ${this.state.page <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              <svg aria-hidden='true' className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z' clip-rule='evenodd'></path></svg>
              Previous
            </button>
            <button onClick={this.nextbtnclick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center ${this.state.page + 1 > Math.ceil(this.state.totalResults / 20) ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              Next
              <svg aria-hidden='true' className='w-5 h-5 ml-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z' clip-rule='evenodd'></path></svg>
            </button>

          </div>
        </div>
      </div>
    )
  }
}
