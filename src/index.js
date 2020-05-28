import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SearchError from './components/SearchError/SearchError';


ReactDOM.render(
  <BrowserRouter>
    <SearchError>
      <App />
    </SearchError>
  </BrowserRouter>,
  document.getElementById('root')
);
