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

const GoldenLayout = require('imports?React=react&ReactDOM=react-dom!golden-layout');


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

var TestComponent = React.createClass({
    render: function() {
        return (<h1>{this.props.label}</h1>)
    }
});



var myLayout = new GoldenLayout({
    content: [{
        type: 'row',
        content:[{
            type:'component',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type:'component',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            },{
                type:'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
});

myLayout.registerComponent( 'testComponent', TestComponent );

//Once all components are registered, call
myLayout.init();

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>

    <MyFirstGrid/>
  </Provider>,
  rootElement
);
