'use strict';
import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';



import App from './containers/App/App';

const rootElement = document.getElementById('app');

const store = configureStore();

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>


    <App/>

  </Provider>,
  rootElement
);
