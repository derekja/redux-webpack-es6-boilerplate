import React from 'react';
import ReactDOM from 'react-dom';

import L from 'leaflet' ;

import  Ldraw from 'leaflet-draw';
import LFull from 'leaflet-fullscreen'
import './Map.scss';

// here's the actual component
var LeafletMap = React.createClass({
    
    componentDidMount: function() { 
        
var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';

var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',osmAttrib = '&copy; ' + osmLink + ' Contributors',landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;

var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}), landMap = L.tileLayer(landUrl, {attribution: thunAttrib});
        
        var map = this.map = L.map(ReactDOM.findDOMNode(this), {
          fullscreenControl: true,
            minZoom: 9,
            maxZoom: 20,
            layers: [   
          osmMap

            ],
            attributionControl: false,
            zoomControl: true,
        });

  map.zoomControl.setPosition('topright');
      var baseLayers = {
	"OSM Mapnik": osmMap,
	"Landscape": landMap
};  

var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);
        var drawControl = new L.Control.Draw({
            edit: {
                featureGroup: drawnItems
            }
        });
L.control.layers(baseLayers).addTo(map);
     // L.control.zoom({ position: "bottomright"}).addTo(map);
     // map.locate({setView: true, maxZoom: 16});
      map.zoomControl.setPosition('topright');
  //  L.control.scale({ position: "topright"}).addTo(map);
   // L.control.fullscreen().addTo(map);

         map.addControl(drawControl);
         
         
      map.on('draw:created', function (e) {
            var type = e.layerType,
                layer = e.layer;
            drawnItems.addLayer(layer);
        });
         setTimeout(() => map.invalidateSize());
        map.fitWorld();
   
        map.setView([-34.25111532338494, -59.012203216552734],14, {
    reset: false
  });
      
     // var marker = L.marker([51.5, -0.09]).addTo(map);
    },
  
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;

    },
    onMapClick: function(e) {
        //alert("You clicked the map at " + e.latlng);

         map.invalidateSize();
    },
    
   /*
     zoomToFeature: function(target) {
    // pad fitBounds() so features aren't hidden under the Filter UI element
    var fitBoundsParams = {
      paddingTopLeft: [200,10],
      paddingBottomRight: [10,10]
    };
    map.fitBounds(target.getBounds(), fitBoundsParams);
  },
  */
   
    render: function() {
        return (
            <div id='map'></div>
        );
    }
});
  
  
 
  // export our Map component so that webpack can include it with other components that require it
module.exports = LeafletMap;




