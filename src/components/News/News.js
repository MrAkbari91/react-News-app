import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container mx-5'>
        <NewsItem />
      </div>
    )
  }
}
