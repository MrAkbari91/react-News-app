import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { FaAngleDown } from 'react-icons/fa6';

export default function Navbar(props) {
    let navitem = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology', 'Environment', 'Food', 'Politics', 'World'] //data
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || 'en'
    );
    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
        localStorage.setItem('selectedLanguage', newLanguage);
    };

    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState("/");

    useEffect(() => {
        setSelectedOption(location.pathname);
    }, [location]);

    const handleNavigation = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };
    // const history = useHistory();

    return (
        <>
            <nav className='bg-gray-500 border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900 w-full sticky z-10 top-0'>
                <div className='container flex flex-wrap items-center justify-between mx-auto'>
                    <Link to='/' className='flex items-center'>
                        <span className='self-center text-3xl whitespace-nowrap dark:text-white logo'>News Valuation</span>
                    </Link>
                    <div className='flex md:order-2'>
                        <DarkModeToggle />
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedLanguage} onChange={handleLanguageChange}>
                                <option selected>Choose a country</option>
                                <option value="hi">Hindi</option>
                                <option value="gu">Gujarati</option>
                                <option value="eu">English</option>
                            </select>
                        <button data-collapse-toggle='navbar-cta' type='button' className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-cta' aria-expanded='false'>
                            <span className='sr-only'>Open main menu</span>
                            <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
                        </button>
                    </div>
                    <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
                        <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-200 dark:bg-gray-700 md:dark:bg-gray-700 dark:border-gray-700'>

                            <li><Link to='/' className='block py-2 pl-3 pr-4 text-gray-600 rounded md:bg-transparent md:p-0 dark:text-white capitalize' aria-current='page'>Home</Link></li>
                            {
                                navitem?.map((menu, index) => (
                                    <li key={index}><Link to={`/${menu.replace(/\s/g, '').toLowerCase()}`} className='block py-2 pl-3 pr-4 text-gray-600 rounded md:bg-transparent md:p-0 dark:text-white capitalize' aria-current='page'>{menu}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>


            {/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <div class="flex items-center md:order-2">
                         <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                            English (US)
                        </button>
                        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                            <ul class="py-2 font-medium" role="none">
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            English (US)
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            Deutsch
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                        <div class="inline-flex items-center">
                                            Italiano
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedLanguage} onChange={handleLanguageChange}>
                            <option selected>Choose a country</option>
                            <option value="CA">Hindi</option>
                            <option value="US">Gujarati</option>
                            <option value="FR">English</option>
                        </select>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page" activeClassName="active">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav > */}

        </>
    )
}
