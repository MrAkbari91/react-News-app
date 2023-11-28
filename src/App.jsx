import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import 'flowbite/dist/flowbite.min.css'
import 'flowbite/dist/flowbite'
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar';



export default function App() {
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div className='dark:bg-gray-800 dark:text-gray-100'>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} key='top' category='top' />}></Route>
          <Route exact path='/business' element={<News setProgress={setProgress} key='business' category='business' />}></Route>
          <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' category='entertainment' />}></Route>
          <Route exact path='/health' element={<News setProgress={setProgress} key='health' category='health' />}></Route>
          <Route exact path='/science' element={<News setProgress={setProgress} key='science' category='science' />}></Route>
          <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' category='sports' />}></Route>
          <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' category='technology' />}></Route>
          <Route exact path='/environment' element={<News setProgress={setProgress} key='environment' category='environment' />}></Route>
          <Route exact path='/food' element={<News setProgress={setProgress} key='food' category='food' />}></Route>
          <Route exact path='/politics' element={<News setProgress={setProgress} key='politics' category='politics' />}></Route>
          <Route exact path='/world' element={<News setProgress={setProgress} key='world' category='world' />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>

      </div>
    </Router>
  )
}