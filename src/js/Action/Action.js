import * as types from '../constants/ActionTypes';


export function Action(gl) {
    
    console.log('startAction');
    gl.eventHub.on(types.Run_Scripts, RunTile, gl);
    
}

export function RunTile() {
    
    console.log('runtile');
    this.eventHub.emit(types.Results_Ready);
    
}
