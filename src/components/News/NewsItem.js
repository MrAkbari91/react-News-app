import React, { Component } from 'react'
// import { Link } from 'react-router-dom';


export default class NewsItem extends Component {
    render() {
        let { title, description, imgurl, publishedAt, link, source } = this.props
        return (
            <div className='shadow-md bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700'>
                <a href={link} target='_blank' rel='noreferrer'>
                    <img className='h-56 lg:h-60 w-full object-cover rounded-t-lg' src={!imgurl ? 'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg' : imgurl} alt={imgurl} />
                    <div className='p-5 h-[230px] relative'>
                        <span className='bg-blue-200 text-xs font-medium text-blue-800 text-center p-1 rounded-full px-2 dark:bg-blue-900 dark:text-white absolute -translate-y-1/2 top-0'>{source}</span>
                        <span className='text-sm text-primary text-gray-400'>Last updated {publishedAt}</span>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white news-card-heading'> {title}</h5>
                        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 news-card-description'>{description}</p>
                    </div>
                </a>
            </div>
        )
    }
}
