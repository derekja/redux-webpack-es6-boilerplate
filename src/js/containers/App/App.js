'use strict';

import React, {Component, PropTypes} from 'react';
import { connect, Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import About from '../About/About';
import Code from '../Code/Code';
import Mrkdown from '../Mrkdown/Mrkdown';
import LMap from '../Map/Map.js';

import configureStore  from '../../store/configureStore';
import GoldenLayout from 'imports?React=react&ReactDOM=react-dom!golden-layout';

//const store = configureStore();


class App extends Component {
 

 constructor(props) {
    super(props)
    


  }

  componentDidMount() {

const { store } = this.context;


var CodeComp = function(container) {
  var code = container.getElement()[ 0 ];
  ReactDOM.render(<Provider store={store}><Code gl={myLayout} /></Provider>, code);
  
}

var AboutComp = function(container) {
  var abt = container.getElement()[ 0 ];
  ReactDOM.render(<Provider store={store}><About gl={myLayout} /></Provider>, abt);
  
}

var MrkdownComp = function(container) {
  var mrk = container.getElement()[ 0 ];
  ReactDOM.render(<Mrkdown/>, mrk);
}

var MapComp = function(container) {
    var map = container.getElement()[ 0 ];
  ReactDOM.render(<LMap gl={myLayout} glcontainer={container} />, map);  
}

var myLayout = new GoldenLayout({
    settings: {
      showPopoutIcon: true
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




  }

  render () {
      return( <myLayout/>)
      
  }  
    
}

App.contextTypes = {
    store: React.PropTypes.object
};


export default App;