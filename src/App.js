import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import PageNotFound from './PageNotFound';
import 'flowbite/dist/flowbite.min.css'
import 'flowbite/dist/flowbite'
import News from './components/News/News';



export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='dark:bg-gray-700 dark:text-gray-100'>
          <Navbar logo='TextConvert' nav1='Home' nav4='Contact Us' />
          <Routes>
            <Route exact path='/' element={<News />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>

          <Footer logo='TextConvert' nav1='Home' nav2='Binary' nav3='QRcode' />
        </div>
      </Router>
    )
  }
}
