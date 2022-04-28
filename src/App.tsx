import React, { useState, useEffect} from 'react';
import './App.css';
import './styles/common.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/homepage/Homepage';
import Activity from './components/activity/Activity';
import Catalog from './components/catalog/Catalog';

import { useDispatch } from 'react-redux';
import { getMarket } from './store/actions/actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarket() as any);
  }, [])

  return (
    <div className="App">
      <div className='header'>
        <Router>
          <main>
            <div className='m-header'>
              <div className='m-container-sh'>
                <div className='m-l-s-inner'>
                  <div className='m-logo'>
                    <img src="" alt="" />
                  </div>
                  <div className='m-search'>
                    <input type="text" />
                  </div>
                </div>
                <ul className='m-menu'>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/catalog">Catalog</Link></li>
                  <li><Link to="/activity">Activity</Link></li>
                </ul>
              </div>
            </div>

            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/catalog" element={<Catalog/>} />
              <Route path="/activity" element={<Activity/>} />
            </Routes>
          </main>
        </Router>
      </div>
      <div className='m-sd'>

      </div>
    </div>
  );
}

export default App;
