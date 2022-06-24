import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import {BrowserRouter} from "react-router-dom";

const root = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter basename='/test/rbuild/'>
        <Routes />
      </BrowserRouter>
    </React.StrictMode>,
  root
);
reportWebVitals();
