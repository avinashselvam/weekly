import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

import { Provider } from 'react-redux'
import reducer from './reducer'

import { createStore } from 'redux'
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode></Provider>,
  document.getElementById('root')
);
