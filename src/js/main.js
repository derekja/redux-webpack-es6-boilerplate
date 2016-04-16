import '../styles/bootstrap.min.css';
import '../styles/styles.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore  from './store/configureStore';
import { Router, browserHistory, hashHistory } from 'react-router';
import { connect } from 'react-redux';
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
  
};

var myLayout = new GoldenLayout({
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
myLayout.registerComponent( 'Mrkdown', Mrkdown );
myLayout.registerComponent( 'LMap', LMap );

//Once all components are registered, call
myLayout.init();

// Render the React application to the DOM
ReactDOM.render(
  <Provider store={store}>
    <myLayout/>
  </Provider>,
  rootElement
);
