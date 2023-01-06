import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class PageNotFound extends Component {
    render() {
        return (
            <section className="flex items-center h-screen p-16 dark:bg-gray-700 dark:text-gray-100 pagenotfound">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-200 ">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-3xl font-semibold text-gray-600 dark:text-gray-400">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-200 text-xl text-gray-600">But don't worry, you can find plenty of other things on our homepage.</p>
                        <Link to="/" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 0">Back to homepage</Link>
                    </div>
                </div>
            </section>
        )
    }
}
