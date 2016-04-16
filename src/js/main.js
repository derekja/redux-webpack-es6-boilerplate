'use strict';
import '../styles/bootstrap.min.css';
import '../styles/styles.scss';
import '../../node_modules/react-grid-layout/node_modules/react-resizable/css/styles.css';
import '../../node_modules/react-grid-layout/css/styles.css';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Router, browserHistory, hashHistory } from 'react-router';
import { connect } from 'react-redux';

var ReactGridLayout = require('react-grid-layout');
import routes from './routes';


var MyFirstGrid = React.createClass({
  render: function() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'a'}>a</div>
        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
      </ReactGridLayout>
    )
  }
});

const store = configureStore();
const rootElement = document.getElementById('app');

let ComponentEl;

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('./containers/DevTools').default;

  // If using routes
  ComponentEl = (
    <div>
      {routes}
      <DevTools />
    </div>
  );
} else {
  ComponentEl = (
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  );
}



// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <MyFirstGrid/>
  </Provider>,
  rootElement
);
