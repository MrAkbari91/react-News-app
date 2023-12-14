import React from 'react'
import fakeImage from './images/fake-news-image.jpg'
import { Tooltip } from 'flowbite-react';

export default function NewsItem(props) {

    let { title, description, imgurl, publishedAt, link, source } = props
    const createMarkup = () => {
        return { __html: description };
    };
    return (
        <>
            <div className='relative sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' >
                <div
                    className="block rounded-lg bg-white shadow dark:bg-neutral-700">
                    <a href={link} target='_blank' rel='noreferrer' className=''>
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
                            <h5 className="mb-2 text-md font-bold text-neutral-800 dark:text-gray-100 line-clamp-2">{title}</h5>
                            <p className="mb-4 text-sm text-neutral-600 dark:text-gray-300 line-clamp-4" dangerouslySetInnerHTML={createMarkup()}></p>
                            <span className='text-sm text-primary text-gray-400'>Last updated {publishedAt}</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}