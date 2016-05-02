import React from 'react';
import ReactDOM from 'react-dom';

import L from 'leaflet' ;
import  Ldraw from 'leaflet-draw';
import BorderPan from './Map.BorderPan' ;
import {Button} from 'react-bootstrap';

import './Map.scss';
// here's the actual component
var LeafletMap = React.createClass({
    
    componentDidMount: function() {
    
            const { glcontainer } = this.props;
                    
            glcontainer.on('resize', this.handleResize);
            window.addEventListener('resize', this.handleResize);
                    
            // var  mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
                    
            var osmLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>',thunLink = '<a href="http://thunderforest.com/">Thunderforest</a>';

            var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',osmAttrib = '&copy; ' + osmLink + ' Contributors',landUrl = 'http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png',thunAttrib = '&copy; '+osmLink+' Contributors & '+thunLink;

            var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}), landMap = L.tileLayer(landUrl, {attribution: thunAttrib});
                    
                    
            var map = this.map = L.map(ReactDOM.findDOMNode(this), {
                        
                   minZoom: 2,
                   maxZoom: 20,
                   layers: [
                   osmMap
                   ],
                   attributionControl: false,
            });

                //  var marker = L.marker([-41.29042, 174.78219]).addTo(map);
                //map.setView([45.5200,-122.6716007], 13); 
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
                //   map.on('click', this.onMapClick);
                    map.addControl(drawControl);
                    
                    
                    map.on('draw:created', function (e) {
                        var type = e.layerType,
                            layer = e.layer;
                        drawnItems.addLayer(layer);
                    });
                    setTimeout(() => map.invalidateSize(), 100);
                    map.fitWorld();
                        
    },
    handleResize: function(e) {
        //this.setState({windowWidth: window.innerWidth});
        //setTimeout(() => map.invalidateSize());
        console.log("resize");
    },
  
    componentWillUnmount: function() {
        this.map.off('click', this.onMapClick);
        this.map = null;
        window.removeEventListener('resize', this.handleResize);
        glcontainer.off('resize', this.handleResize);
    },
    onMapClick: function() {
        // Do some wonderful map things...
         map.invalidateSize();
    },
//      btnClick = () => {
      //const { store } = this.context;
//      let txt = this.state.txt;
//      console.log("btnClick_map "+txt);
      //store.dispatch({type: 'Run_Tile'});
//  },
    
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
              <div className='map'>
            
              </div>


        );
    }
});
  
  
 
  // export our Map component so that webpack can include it with other components that require it
module.exports = LeafletMap;





