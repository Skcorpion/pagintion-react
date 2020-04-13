import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/pagination" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
