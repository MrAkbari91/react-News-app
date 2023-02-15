import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import PageNotFound from './PageNotFound';
import 'flowbite/dist/flowbite.min.css'
import 'flowbite/dist/flowbite'
import News from './components/News/News';
import LoadingBar from 'react-top-loading-bar';



export default class App extends Component {

  constructor() {
    super();
    this.state = {
      theme: null,
    }
  }
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
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
    // let navitem = ['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'] //api
    let navitem = ['business', 'entertainment', 'health', 'science', 'sports', 'technology', 'environment', 'food',  'politics',  'world'] //data

    const { darkMode } = this.state;
    // const api_Key = 'ad43284cea444327832f0de1a4292f24'    //     api = 100    default category = top
    const api_Key = 'pub_15464e0c79fbf2f2e24013532c7788dbeb006'     //    data = 200 make top

    // const api_Key ='ad43284cea444327832f0de1a4292f24'
    return (
      <Router>
        <div className='dark:bg-gray-700 dark:text-gray-100'>
          <Navbar logo='News Valuation' navitem={navitem} darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
          <LoadingBar height={3} color='#f11946' progress={this.state.progress} />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} key='top' api_Key={api_Key} country='in' category='top' pageSize='20' />}></Route>
            <Route exact path='/General' element={<News setProgress={this.setProgress} key='top' api_Key={api_Key} country='in' category='' pageSize='20' />}></Route>

            <Route exact path='/business' element={<News setProgress={this.setProgress} key='business' api_Key={api_Key} country='in' category='business' />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key='entertainment' api_Key={api_Key} country='in' category='entertainment' />}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} key='health' api_Key={api_Key} country='in' category='health' />}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} key='science' api_Key={api_Key} country='in' category='science' />}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} key='sports' api_Key={api_Key} country='in' category='sports' />}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} key='technology' api_Key={api_Key} country='in' category='technology' />}></Route>

            <Route exact path='/environment' element={<News setProgress={this.setProgress} key='environment' api_Key={api_Key} country='in' category='environment' />}></Route>
            <Route exact path='/food' element={<News setProgress={this.setProgress} key='food' api_Key={api_Key} country='in' category='food' />}></Route>
            <Route exact path='/politics' element={<News setProgress={this.setProgress} key='politics' api_Key={api_Key} country='in' category='politics' />}></Route>
            <Route exact path='/world' element={<News setProgress={this.setProgress} key='world' api_Key={api_Key} country='in' category='world' />}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Routes>

          <Footer logo='News Valuation' navitem={navitem}/>
        </div>
      </Router>
    )
  }
}
