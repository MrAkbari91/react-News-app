import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { Menu, ChevronDown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export default function Navbar(props) {
    let navitem = ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology', 'Environment', 'Food', 'Politics', 'World'] //data


    const location = useLocation();
    const [selectedOption, setSelectedOption] = useState("/");

    useEffect(() => {
        setSelectedOption(location.pathname);
    }, [location]);



    const handleLanguageChange = (language) => {
        localStorage.setItem('selectedLanguage', language);
        setSelectedLanguage(language);

        // Call the updateNews function here or pass it to another component as needed
        updateNews();
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <span className='self-center whitespace-nowrap dark:text-white logo sm:text-3xl'>News Valuation</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <LanguageSelector onLanguageChange={handleLanguageChange} />
                        <DarkModeToggle />
                        <button data-collapse-toggle="navbar-language" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <Menu />
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-language">
                        <ul className="flex flex-col font-medium p-2 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <div id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Category <ChevronDown /> </div>

                                <div id="dropdownDelay" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow sm:w-44 dark:bg-gray-700 w-11/12">

                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownDelayButton">
                                        {
                                            navitem?.map((menu, index) => (
                                                <li key={index}><Link to={`/${menu.replace(/\s/g, '').toLowerCase()}`} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize' aria-current='page'>{menu}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        </>
    )
}
