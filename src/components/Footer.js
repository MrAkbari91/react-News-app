import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Footer extends Component {
    render() {
        let { logo, nav1, nav2, nav3, } = this.props
        let year = new Date().getFullYear();

        return (

            <footer className='bottom-0 left-0 z-20 w-full p-4 bg-gray-100 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'>
                <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© {year} <Link to='https://flowbite.com/' className='hover:underline'>{logo}</Link>. All Rights Reserved.
                </span>
                <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
                    <li>
                        <Link to='#' className='mr-4 hover:underline md:mr-6 '>{nav1}</Link>
                    </li>
                    <li>
                        <Link to='#' className='mr-4 hover:underline md:mr-6'>{nav2}</Link>
                    </li>
                    <li>
                        <Link to='#' className='mr-4 hover:underline md:mr-6'>{nav3}</Link>
                    </li>
                </ul>
            </footer>

        )
    }
}
