import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            active: null,
        }
    }
    render() {
        let { logo, navitem, theme, toggleDarkMode } = this.props
        // let navitem = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']
        return (
            <div>

                <nav class='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
                    <div class='container flex flex-wrap items-center justify-between mx-auto'>
                        <Link to='https://flowbite.com/' className='flex items-center'>
                            <span className='self-center text-3xl whitespace-nowrap dark:text-white logo'>{logo}</span>
                        </Link>
                        <div class='flex md:order-2'>
                            <button id='theme-toggle' type='button' onClick={toggleDarkMode} className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg p-2.5'>
                                {theme === 'dark' ? <svg id='light-icon' className='0 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' /></svg> : <svg id='dark-icon' className=' w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /></svg>}
                            </button>
                            <button data-collapse-toggle='navbar-cta' type='button' class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-cta' aria-expanded='false'>
                                <span class='sr-only'>Open main menu</span>
                                <svg class='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
                            </button>
                        </div>
                        <div class='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
                            <ul class='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>

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



                {/* <nav className='bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
                    <div className='container flex flex-wrap items-center justify-between mx-auto'>
                        <Link to='https://flowbite.com/' className='flex items-center'>
                            <span className='self-center text-3xl whitespace-nowrap dark:text-white logo'>{logo}</span>
                        </Link>
                        <div className='flex md:order-2'>
                            <button id='theme-toggle' type='button' onClick={toggleDarkMode} className='text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg p-2.5'>
                                {theme === 'dark' ? <svg id='light-icon' className='0 w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z' /></svg> : <svg id='dark-icon' className=' w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' /></svg>}
                            </button>
                            <button type='button' class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Get started</button>
                            <button data-collapse-toggle='navbar-cta' type='button' class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-cta' aria-expanded='true'>
                                <span class='sr-only'>Open main menu</span>
                                <svg class='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd'></path></svg>
                            </button>
                        </div>
                        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-sticky'>
                            <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:font-medium md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                                <li><Link to='/' className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current='page'>Home</Link></li>
                                {
                                    navitem?.map(menu => (
                                        <li><Link to={`/${menu}`} className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white' aria-current='page'>{menu}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </div>

        )
    }
}

export default Navbar
