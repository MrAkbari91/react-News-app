import React, { Component } from 'react';
import './App.css';
import './components/style.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import PageNotFound from './PageNotFound';
import 'flowbite/dist/flowbite.min.css'
import 'flowbite/dist/flowbite'
import News from './components/News/News';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      theme: null,
    }
  }

  toggleDarkMode = () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        this.setState({
          theme: 'dark'
        });
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        this.setState({
          theme: 'light'
        });
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        this.setState({
          theme: 'light'
        });
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        this.setState({
          theme: 'dark'
        });
      }
    }
  };

  componentDidMount() {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        this.setState({
          theme: 'light'
        });
      } else {
        this.setState({
          theme: 'dark'
        });
      }
    }
  }
  render() {
    // let navitem = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology']
    let navitem = ['business', 'entertainment', 'health', 'science', 'sports', 'technology', 'environment', 'food',  'politics',  'world']

    const { darkMode } = this.state;
    // const apiKey = 'ad43284cea444327832f0de1a4292f24'    //     api = 100    default category = top
    const apiKey = 'pub_15464e0c79fbf2f2e24013532c7788dbeb006'     //    data = 200
    // const apiKey='';
    return (
      <Router>
        <div className='dark:bg-gray-700 dark:text-gray-100'>
          <Navbar logo='News Valuation' navitem={navitem} darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
          <Routes>
            <Route exact path='/' element={<News key='top' country='in' category='' pageSize='20' />}></Route>   

            <Route exact path='/business' element={<News key='business' apiKey={apiKey} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News key='entertainment' apiKey={apiKey} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News key='health' apiKey={apiKey} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News key='science' apiKey={apiKey} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News key='sports' apiKey={apiKey} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News key='technology' apiKey={apiKey} country='in' category='technology' />}></Route>

            <Route exact path='/environment' element={<News key='environment' apiKey={apiKey} country='in' category='environment' />}></Route>
            <Route exact path='/food' element={<News key='food' apiKey={apiKey} country='in' category='food' />}></Route>
            <Route exact path='/politics' element={<News key='politics' apiKey={apiKey} country='in' category='politics' />}></Route>
            <Route exact path='/world' element={<News key='world' apiKey={apiKey} country='in' category='world' />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>

          <Footer logo='News Valuation' nav1='Home' nav2='About' nav3='Contact Us' />
        </div>
      </Router>
    )
  }
}
