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
        case types.DocsWindow:
        console.log("docswindow");
        var newItemConfig = {
            title: "Docs",
            type: 'component',
            componentName: 'Docs'
         };
         this.root.contentItems[ 0 ].addChild( newItemConfig );
  
    }
    
    
}