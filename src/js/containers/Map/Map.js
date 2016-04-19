import React from 'react';
import ReactDOM, { render } from 'react-dom';

import L from 'leaflet' ;
import BorderPan from './Map.BorderPan'

//import './Map.scss';
// here's the actual component
var LeafletMap = React.createClass({
    componentDidMount: function() {
        var map = this.map = L.map(ReactDOM.findDOMNode(this), {
            minZoom: 9,
            maxZoom: 20,
            layers: [
                
       L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
}
)    
                
                
                
       //  L.tileLayer(
      //   'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
     //   {attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
            ],
            attributionControl: false,
            zoomControl: true,
        });
        
        map.setView([45.5200,-122.6716007], 13);   
     // L.control.zoom({ position: "bottomright"}).addTo(map);
     // map.locate({setView: true, maxZoom: 16});
      map.zoomControl.setPosition('topright');
   // L.control.scale({ position: "topright"}).addTo(map);
   // L.control.fullscreen().addTo(map);
     //   map.on('click', this.onMapClick);
        
        map.fitWorld();
        
      
     // var marker = L.marker([51.5, -0.09]).addTo(map);
    },
    
    componentWillUnmount: function() {
        //this.map.off('click', this.onMapClick);
        //this.map = null;
    },
    onMapClick: function(e) {
        // Do some wonderful map things...
        //alert("You clicked the map at " + e.latlng);
        map.invalidateSize();
    },
   
   
    render: function() {
        return (
            <div id='map'></div>
        );
    }
});
  
  
 
  // export our Map component so that webpack can include it with other components that require it
module.exports = LeafletMap;




