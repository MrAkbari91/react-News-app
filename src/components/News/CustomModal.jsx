// Modal.jsx
import React from 'react';
import Modal from 'react-modal';
import { MdClose } from "react-icons/md";


const CustomModal = ({ isOpen, onRequestClose, newsdata }) => {
    console.log(newsdata);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Details Modal"
            className="ReactModal__Content ReactModal__Content--after-open absolute right-1 transform -translate-x-1/4 -translate-y-1/4 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white overflow-auto inset-10 border-8 border-white dark:border-gray-800 min-h-[80vh]"
        >
            <button className='absolute top-2 right-2 p-2 rounded-full text-white bg-gray-400 dark:bg-gray-600' onClick={onRequestClose}>
                <MdClose />
            </button>
            <h2 className='mt-2 pt-3 pb-2 text-xl font-bold'>{newsdata.title}</h2>
            <img src={newsdata.image_url} alt={newsdata.title} width={500} className='m-auto mt-5 rounded-md' />
            <p className='text-sm font-medium text-blue-800 text-center py-2 rounded-full dark:text-white mb-5'> creator: {newsdata.creator}</p>
            <p dangerouslySetInnerHTML={{ __html: newsdata.description }} className='space-y-5' />
            <p dangerouslySetInnerHTML={{ __html: newsdata.content }} className='space-y-5 mt-5'></p>

        </Modal>
    );
};

export default CustomModal;
