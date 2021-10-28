import React from 'react';
import { render } from 'react-dom';
import './style.css';
import smartData from './smartHomeData.js';
import Header from './components/Header';
import Dashbord from './components/Dashboard';


const App = () => (
  <div className="container">
    <Header/>
    <Dashbord data={smartData}/>
  </div>
);

render(<App />, document.querySelector('#app'));
