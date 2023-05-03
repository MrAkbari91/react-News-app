import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import PageNotFound from './PageNotFound';
import 'flowbite/dist/flowbite.min.css'
import 'flowbite/dist/flowbite'
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar';



export default function App() {

  const [theme, setTheme] = useState(null);
  const [progress, setProgress] = useState(0);



  const toggleDarkMode = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setTheme('dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setTheme('light');
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        setTheme('light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        setTheme('dark');
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        setTheme('light')
      } else {
        setTheme('dark')
      }
    }
  }, [])

  return (
    <Router>
      <div className='dark:bg-gray-700 dark:text-gray-100'>
        <Navbar darkMode={theme} toggleDarkMode={toggleDarkMode} />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='top' country='in' category='top' pageSize='20' />}></Route>
          <Route exact path='/General' element={<News setProgress={setProgress} key='top' country='in' category='' pageSize='20' />}></Route>

          <Route exact path='/business' element={<News setProgress={setProgress} key='business' country='in' category='business' />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' country='in' category='entertainment' />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' country='in' category='health' />}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' country='in' category='science' />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' country='in' category='sports' />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' country='in' category='technology' />}></Route>

          <Route exact path='/environment' element={<News setProgress={setProgress} key='environment' country='in' category='environment' />}></Route>
          <Route exact path='/food' element={<News setProgress={setProgress} key='food' country='in' category='food' />}></Route>
          <Route exact path='/politics' element={<News setProgress={setProgress} key='politics' country='in' category='politics' />}></Route>
          <Route exact path='/world' element={<News setProgress={setProgress} key='world' country='in' category='world' />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>

      </div>
    </Router>
  )
}