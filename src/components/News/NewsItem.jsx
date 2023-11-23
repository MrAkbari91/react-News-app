import React from 'react'
import fakeImage from './images/fake-news-image.jpg'

export default function NewsItem(props) {

    let { title, description, imgurl, publishedAt, link, source } = props
    const createMarkup = () => {
        return { __html: description };
    };
    return (
        <>
            <div
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" >
                <a href={link} target='_blank' rel='noreferrer'>
                    <div
                        className={`relative overflow-hidden bg-cover bg-no-repeat h-[161px] rounded-t-lg ${!imgurl ? 'url(${fakeImage})' : 'bg-[#101f26]'}`}
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            className="rounded-t-lg h-[161px] w-full object-cover"
                            src={!imgurl ? fakeImage : imgurl}
                            alt="" height={161} />
                    </div>
                    <div className="p-6 relative">
                        <span className='bg-blue-200 text-xs font-medium text-blue-800 text-center p-1 rounded-full px-2 dark:bg-blue-900 dark:text-white absolute -translate-y-1/2 top-0'>{source}</span>
                        <span className='text-sm text-primary text-gray-400'>Last updated {publishedAt}</span>
                        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 news-card-heading">{title}</h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 news-card-description" dangerouslySetInnerHTML={createMarkup()}></p>
                    </div>
                </a>
            </div>
        </>
    )
}