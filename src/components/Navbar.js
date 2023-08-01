import React from 'react'
import { Link } from 'react-router-dom';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

export default function Navbar(props) {
    //    let navitem = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'] //api
    let navitem = ['business', 'entertainment', 'health', 'science', 'sports', 'technology', 'environment', 'food', 'politics', 'world'] //data
    return (
        <>
            <Flowbite>
                <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed w-full z-10 top-0'>
                    <div className='container flex flex-wrap items-center justify-between mx-auto'>
                        <Link to='https://flowbite.com/' className='flex items-center'>
                            <span className='self-center text-3xl whitespace-nowrap dark:text-white logo'>News Valuation</span>
                        </Link>
                        <div className='flex md:order-2'>
                            <DarkThemeToggle />
                            <button data-collapse-toggle='navbar-cta' type='button' className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-cta' aria-expanded='false'>
                                <span className='sr-only'>Open main menu</span>
                                <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
                            </button>
                        </div>
                        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
                            <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>

                                <li><Link to='/' className='block py-2 pl-3 pr-4 text-gray-600 rounded md:bg-transparent md:p-0 dark:text-white capitalize' aria-current='page'>Home</Link></li>
                                {
                                    navitem?.map(menu => (
                                        <li><Link to={`/${menu}`} className='block py-2 pl-3 pr-4 text-gray-600 rounded md:bg-transparent md:p-0 dark:text-white capitalize' aria-current='page'>{menu}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </Flowbite>
        </>
    )
}
