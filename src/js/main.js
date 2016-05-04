'use strict';
import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import Appl from './containers/Appl/Appl';

const rootElement = document.getElementById('app');


// Render the React application to the DOM
ReactDOM.render(
    <Appl/>,
  rootElement
);
