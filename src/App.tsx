import React, {useEffect} from 'react';
import './App.css';
import './styles/common.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/common/Header';
import HomePage from './components/homepage/Homepage';
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
          <Header/>
          <main>

            <Routes>
              <Route path="/" element={<HomePage />} /> 
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
