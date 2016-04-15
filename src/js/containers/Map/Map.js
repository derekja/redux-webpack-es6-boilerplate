import React from 'react';
import ReactDOM, { render } from 'react-dom';

import L from 'leaflet' ;
import BorderPan from './Map.BorderPan'
// here's the actual component
var LeafletMap = React.createClass({
    componentDidMount: function() {
        var map = this.map = L.map(ReactDOM.findDOMNode(this), {
            minZoom: 2,
            maxZoom: 20,
            layers: [
         L.tileLayer(
         'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
            ],
            attributionControl: false,
        });
      L.control.zoom({ position: "bottomleft"}).addTo(map);
    L.control.scale({ position: "bottomleft"}).addTo(map);
        map.on('click', this.onMapClick);
        
        map.fitWorld();
               
    },
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;
    },
    onMapClick: function() {
        // Do some wonderful map things...
    },
   
     zoomToFeature: function(target) {
    // pad fitBounds() so features aren't hidden under the Filter UI element
    var fitBoundsParams = {
      paddingTopLeft: [200,10],
      paddingBottomRight: [10,10]
    };
    map.fitBounds(target.getBounds(), fitBoundsParams);
  },
  
   
    render: function() {
        return (
            <div className='map'></div>
        );
    }
});
  
  
 
  // export our Map component so that webpack can include it with other components that require it
module.exports = LeafletMap;




