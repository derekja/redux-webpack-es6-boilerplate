import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Console from '../Console/Console';
import TileCode from '../TileCode/TileCode';
import CollectorCode from '../CollectorCode/CollectorCode';
import Docs from '../Docs/Docs';
import LMap from '../Map/Map.js';
import Runbtn from '../Runbtn/Runbtn';
import Header from '../Header/Header';


import GoldenLayout from 'imports?React=react&ReactDOM=react-dom!golden-layout';

import { Action } from '../../Action/Action';


class Appl extends Component {
 

 constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {


var RunbtnComp = function(container) {
  var rb = container.getElement()[ 0 ];
  ReactDOM.render(<Runbtn gl={myLayout}/>, rb);
};


var TileCodeComp = function(container) {
  var tilecode = container.getElement()[ 0 ];
  ReactDOM.render(<TileCode gl={myLayout}/>, tilecode);
  
};

var CollectorCodeComp = function(container) {
  var collectorcode = container.getElement()[ 0 ];
  ReactDOM.render(<CollectorCode gl={myLayout} glhub={myLayout.eventHub}/>, collectorcode);
  
};


var ConsoleComp = function(container) {
  var Cons = container.getElement()[ 0 ];
  ReactDOM.render(<Console gl={myLayout} />, Cons);
  
};

var DocsComp = function(container) {
  var mrk = container.getElement()[ 0 ];
  ReactDOM.render(<Docs/>, mrk);
};

var MapComp = function(container) {
    var map = container.getElement()[ 0 ];
  ReactDOM.render(<LMap gl={myLayout} glcontainer={container} />, map);  
};

var myLayout = new GoldenLayout({
    settings: {
      showPopoutIcon: true
    },
    content: [{
        type: 'row',
        content:[{
            type:'component',
            componentName: 'Console',
            title: 'Console output',
            ComponentState: { label: 'Console' }
        },{
            type:'component',
            componentName: 'Runbtn',
            title: 'Controls',
            ComponentState: { label: 'Controls' }
        },{
            type: 'column',
            content:[{
                type:'component',
                componentName: 'Docs',
                title: 'Documentation',
                props: { label: 'Docs' }
            },{
                type:'component',
                componentName: 'LMap',
                title: 'Map',
                props: { label: 'Map' }
            },{
                type:'component',
                componentName: 'TileCode',
                title: 'Tile Code',
                props: { label: 'Tile' }
            },{
                type:'component',
                componentName: 'CollectorCode',
                title: 'Collector Code',
                props: { label: 'Collector' }
            }]
        }]
    }]
});

myLayout.registerComponent( 'Runbtn', RunbtnComp );
myLayout.registerComponent( 'TileCode', TileCodeComp );
myLayout.registerComponent( 'CollectorCode', CollectorCodeComp );
myLayout.registerComponent( 'Console', ConsoleComp );
myLayout.registerComponent( 'Docs', DocsComp );
myLayout.registerComponent( 'LMap', MapComp );



//Once all components are registered, call
myLayout.init();

Action(myLayout);


  }

  render () {
      return( 
        <div className="lm_goldenlayout">
            <Header />
            <myLayout/>
        </div>
      );
  }   
}

Appl.contextTypes = {
    store: React.PropTypes.object
};


export default Appl;