import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaSkype, FaGithub, } from "react-icons/fa6";

export default function FooterNav() {
    let year = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <span className="self-center sm:text-3xl whitespace-nowrap dark:text-white logo">
                                News Valuation
                            </span>
                        </Link>
                    </div>
                    
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © {year}{" "}
                        <a href="#" className="hover:underline">
                            Dhruv Akbari.
                        </a>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/dhruvakbari91/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl">
                            <FaFacebook />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://www.instagram.com/mr._akbari._/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl">
                            <FaInstagram />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://twitter.com/mr_akbari_91" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl">
                            <FaTwitter />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://www.linkedin.com/in/dhruvakbari" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl">
                            <FaLinkedin />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://join.skype.com/invite/vhE9b00x6FRm" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl">
                            <FaSkype />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://github.com/MrAkbari91" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 text-xl">
                            <FaGithub />
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
