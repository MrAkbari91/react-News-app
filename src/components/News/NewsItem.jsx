import React, { useState } from 'react'
import fakeImage from './images/fake-news-image.jpg'
import CustomModal from './CustomModal';

export default function NewsItem({news}) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const createMarkup = () => {
        return { __html: news.description };
    };
    return (
        <>
            <div className='flex relative sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4' >
                <div
                    className="flex flex-col flex-auto rounded-lg bg-white shadow dark:bg-neutral-700" onClick={openModal}>
                    <div
                        className={`relative overflow-hidden bg-cover bg-no-repeat h-[161px] rounded-t-lg ${!news.image_url ? 'url(${fakeImage})' : 'bg-[#101f26]'}`}
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <img
                            className="rounded-t-lg h-[161px] w-full object-cover"
                            src={!news.image_url ? fakeImage : news.image_url}
                            alt="" height={161} />
                    </div>
                    <div className="relative flex-auto px-6 pt-6 ">
                        <span className='bg-blue-200 text-xs font-medium text-blue-800 text-center p-1 rounded-full px-2 dark:bg-blue-900 dark:text-white absolute -translate-y-1/2 top-0'>{news.source_id}</span>
                        <h5 className="mb-2 text-md font-bold text-neutral-800 dark:text-gray-100 line-clamp-2" title={news.title}>{news.title}</h5>
                        <p className="mb-4 text-sm text-neutral-600 dark:text-gray-300 line-clamp-4" dangerouslySetInnerHTML={createMarkup()}></p>
                    </div>
                    <div className='text-sm px-6 py-4 text-gray-400 border-t border-gray-300 dark:border-gray-600'>
                        <p>Last updated {news.pubDate}</p>
                    </div>

                </div>
            </div>
            <CustomModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                newsdata={news}
            />
        </>
    )
}