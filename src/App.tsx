import {useEffect} from 'react';
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
import { ROUTES } from '../src/Routes';

const App = (props:any) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarket() as any);
  }, [])

  return (
    <div>
      <div className='header'>
        <Router>
          <Header/>
          <main>

            <Routes>
              <Route path="/" element={<HomePage />} /> 
              <Route path={ROUTES.CATALOG_PATH} element={<Catalog/>} />
              <Route path={ROUTES.ACTIVITY_PATH} element={<Activity/>} />
            </Routes>
          </main>
        </Router>
      </div>
    </div>
  );
}

export default App;
