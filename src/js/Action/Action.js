import * as types from '../constants/ActionTypes';


export function Action(gl) {
    
    console.log('startAction');
    gl.eventHub.on(types.Run_Scripts, RunTile, gl);
    gl.eventHub.on(types.New_Window, NewWindow, gl);
    
}

function RunTile() {
    
    console.log('runtile');
    this.eventHub.emit(types.Results_Ready);
    
}

function NewWindow(window) {
    switch(window) {

        case types.TileWindow:
            console.log("tilewindow");
            let newItemConfig0 = {
                title: "Tile",
                type: 'component',
                componentName: 'TileCode'
            };
            this.root.contentItems[ 0 ].addChild( newItemConfig0 );
            break;

        case types.DocsWindow:
            console.log("docswindow");
            let newItemConfig1 = {
                title: "Docs",
                type: 'component',
                componentName: 'Docs'
            };
            this.root.contentItems[ 0 ].addChild( newItemConfig1 );
            break;
            
        case types.CollectorWindow:
            console.log("collectorwindow");
            let newItemConfig2 = {
                title: "Collector",
                type: 'component',
                componentName: 'CollectorCode'
            };
            this.root.contentItems[ 0 ].addChild( newItemConfig2 );
            break;  
                                  
        case types.ConsoleWindow:
            console.log("consolewindow");
            let newItemConfig4 = {
                title: "Console",
                type: 'component',
                componentName: 'Console'
            };
            this.root.contentItems[ 0 ].addChild( newItemConfig4 );
            break;   
            
        case types.MapsWindow:
            console.log("mapswindow");
            let newItemConfig5 = {
                title: "Map",
                type: 'component',
                componentName: 'LMap'
            };
            this.root.contentItems[ 0 ].addChild( newItemConfig5 );
            break;      

        case types.ScriptsWindow:
            console.log("scriptswindow");
            let newItemConfig6 = {
                title: "Scripts",
                type: 'component',
                componentName: 'Docs'
            };
            this.root.contentItems[ 0 ].addChild( newItemConfig6 );
            break;   
                                    
        case types.AOIWindow:
            console.log("aoiwindow");
            let newItemConfig7 = {
                title: "AOI",
                type: 'component',
                componentName: 'Docs'
            };
            this.root.contentItems[ 0 ].addChild( newItemConfig7 );
            break;      
    }
    
    
}