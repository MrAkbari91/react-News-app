// LanguageSelector.jsx
import React, { useState, useEffect } from 'react';
import fetchData from './News/Fetchdata';

const LanguageSelector = ({ onLanguageChange }) => {
    // Default language is Gujarati
    const storedLanguage = localStorage.getItem('selectedLanguage');
    const defaultLanguage = storedLanguage || 'gu'; // Default to Gujarati if not defined

    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

    useEffect(() => {
        // Update the language in the parent component or perform other actions
        onLanguageChange(selectedLanguage);

        // Update localStorage
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage, onLanguageChange]);

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
        localStorage.setItem('selectedLanguage', newLanguage);

        const pageUrl = window.location.href;
        const urlParts = new URL(pageUrl);
        const pathArray = urlParts.pathname.split('/').filter(part => part !== '');

        var lastSlug = pathArray[pathArray.length - 1];
        if (lastSlug == undefined) {
            lastSlug = "top";
        }
        // Call the updateNews function here or pass it to another component as needed
        fetchData(lastSlug);
        // Reload the page
        window.location.reload();
    };


    return (
        <div>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedLanguage} onChange={handleLanguageChange}>
                <option value="gu">Gujarati</option>
                <option value="hi">Hindi</option>
                <option value="eu">English</option>
            </select>
        </div>
    );
};

export default LanguageSelector;
