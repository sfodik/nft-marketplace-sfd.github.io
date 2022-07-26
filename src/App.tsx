import { useEffect } from 'react';
import './styles/common.scss';

import {
  Routes,
  Route,
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { getMarket } from './store/actions/actions';
import { MainInner } from './components/common/styles';

import routes from '../src/components/pages/index'
import Header from './components/common/Header';
import Footer from './components/common/Footer';

const App = (props:any) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarket() as any);
  }, [])

  return (
    <MainInner>
      <Header />
      <Routes>
        {
          routes.map((data,index) => (
            <Route path={data.path} element={data.component} key={index} />
          ))
        }
      </Routes>
      <Footer />
    </MainInner>
  );
}

export default App;
