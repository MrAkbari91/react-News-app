import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      articles: []
    }
  }
  componentDidMount() {
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=ad43284cea444327832f0de1a4292f24")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
    // async componentDidMount(){
    //   console.log("halo");
    //   let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ad43284cea444327832f0de1a4292f24";
    //   // let url = "https://newsdata.io/api/1/news?apikey=pub_15464e0c79fbf2f2e24013532c7788dbeb006&country=in";
    //   // let url = "https://api.publicapis.org/entries";
    //   let data = await fetch(url);
    //   let json = await data.json();
    //  this.setState({ articles:json.articles})
    // }
    render() {
      return (
        <div className='container mx-auto'>
          <div className="flex flex-wrap -mx-4">
            {this.state.articles.map((element) => {
              return (
                <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.urlToImage} newsUrl="" publishedAt={element.publishedAt} />
              )
            })}
          </div>
        </div>
      )
    }
  }
