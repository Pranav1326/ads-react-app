import React from 'react';
import Navbar from '../Navbar/Navbar';
import './home.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <Router>
      <div className='home'>
        <Navbar />
        <div className="search-div">
          <input type="text" name="search" placeholder='Search Ad Here...'/>
          <button>Search</button>
        </div>
      </div>
    </Router>
  );
}

export default Home;