import * as types from '../../constants/ActionTypes';
import React, { Component, PropTypes } from 'react';
import {MenuList, MenuItem, MenuButton, Dropdown, SubMenuItem} from 'react-menu-list';
import './Header.scss';

var _ = require('lodash');

function LI(props) {
  return (
    <div className="MenuItem">
    <MenuItem
      highlightedStyle={{background: 'gray'}}
      onItemChosen={(e) => {
        console.log(`selected ${props.children}, byKeyboard: ${e.byKeyboard}, gl: ${props.gl} `);
        if (props.gl) {
          let window = props.type;
          props.gl.eventHub.emit('New_Window', window);
        }
      }}
      {...props}
    />
    </div>
  );
}


class Header extends Component {

  constructor(props) {
      super(props);
    }
    

  render() {
    
    return (
      <div className="lm_header_menu">
            <MenuButton
              menu={
             <div className='MenuList'>
                  <MenuList>
                      <LI type={types.TileWindow} gl={this.props.gl}>Tile Code</LI>
                      <LI type={types.DocsWindow} gl={this.props.gl}>Docs</LI>
                      <LI type={types.CollectorWindow} gl={this.props.gl}>Collector</LI>
                      <LI type={types.RunbtnWindow} gl={this.props.gl}>Controls</LI>
                      <LI type={types.ConsoleWindow} gl={this.props.gl}>Console</LI>
                      <LI type={types.MapsWindow} gl={this.props.gl}>Map</LI>
                      <LI type={types.ScriptsWindow} gl={this.props.gl}>Scripts</LI>
                      <LI type={types.AOIWindow} gl={this.props.gl}>AOI</LI>
                  </MenuList>
                </div>
              }
              >
              MENU
            </MenuButton>
      </div>
    );
    
  }
}

export default Header;
