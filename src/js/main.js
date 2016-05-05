'use strict';
import '../styles/bootstrap.min.css';
import '../styles/styles.scss';
import '../styles/goldenlayout-soda-theme.css';
import '../styles/goldenlayout-base.css';


import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { connect } from 'react-redux';


import About from './containers/About/About';
import Code from './containers/Code/Code';
import Mrkdown from './containers/Mrkdown/Mrkdown';
import LMap from './containers/Map/Map.js';
import Header from './containers/Header/Header';

const GoldenLayout = require('imports?React=react&ReactDOM=react-dom!golden-layout');


const store = configureStore();
const rootElement = document.getElementById('app');


var CodeComp = function(container) {
  var code = container.getElement()[ 0 ];
  ReactDOM.render(<Code/>, code);
  
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
    var map = container.getElement()[ 0 ];
  ReactDOM.render(<LMap/>, map);  
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
            },{
                type:'component',
                componentName: 'Code',
                title: 'item D',
                props: { label: 'D' }
            }]
        }]
    }]
});

myLayout.registerComponent( 'Code', CodeComp );
myLayout.registerComponent( 'About', AboutComp );
myLayout.registerComponent( 'Mrkdown', MrkdownComp );
myLayout.registerComponent( 'LMap', MapComp );

//Once all components are registered, call
myLayout.init();

// Render the React application to the DOM
//   <div className='mainContainer'>  <MenuBar/> </div> 
ReactDOM.render(
  <Provider store={store}>

    <div className="lm_goldenlayout">
        <Header/>
        <myLayout/>
    </div>

  </Provider>,
  rootElement
);
