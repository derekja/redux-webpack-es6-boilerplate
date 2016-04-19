'use strict';
import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Router, browserHistory, hashHistory } from 'react-router';
import { connect } from 'react-redux';

import MenuBar from './components/menubar';
import About from './containers/AboutApp/AboutApp';
import Mrkdown from './containers/MrkdownApp/MrkdownApp';
import LMap from './containers/Map/Map.js';

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

class testComponent extends Component {
    render() {
        
        return (<h3><i>{this.state.label}foo</i></h3>)
    }
}

var AboutComp = function(container) {
  var abt = container.getElement()[ 0 ];
  ReactDOM.render(<About/>, abt);
  
}

var MrkdownComp = function(container) {
  var mrk = container.getElement()[ 0 ];
  ReactDOM.render(<Mrkdown/>, mrk);
}


var MapComp = function(container) {
  var m = container.getElement()[ 0 ];
  ReactDOM.render(<LMap/>, m);
}
var myLayout = new GoldenLayout({
    settings: {
      showPopoutIcon: false
    },
    content: [{
        type: 'row',
        content:[{
            type:'component',
            componentName: 'About',
            title: 'item A',
            ComponentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type:'component',
                componentName: 'Mrkdown',
                title: 'item b',
                props: { label: 'B' }
            },{
                type:'component',
                componentName: 'LMap',
                title: 'item C',
                props: { label: 'C' }
            }]
        }]
    }]
});

myLayout.registerComponent( 'TestComponent', testComponent );
myLayout.registerComponent( 'About', AboutComp );
myLayout.registerComponent( 'Mrkdown', MrkdownComp );
myLayout.registerComponent( 'LMap', MapComp );

//Once all components are registered, call
myLayout.init();

// Render the React application to the DOM
//   <div className='mainContainer'>  <MenuBar/> </div> 
ReactDOM.render(
  <Provider store={store}>


    <myLayout/>

  </Provider>,
  rootElement
);
