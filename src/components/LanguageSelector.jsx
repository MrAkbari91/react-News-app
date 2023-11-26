// LanguageSelector.jsx
import React, { useState } from 'react';

const LanguageSelector = ({ onLanguageChange }) => {
    // Default language is Gujarati
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || 'gu'
    );

    const handleLanguageChange = (event) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
        localStorage.setItem('selectedLanguage', newLanguage);
    };


    const handleNavigation = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
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
