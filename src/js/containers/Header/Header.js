import React, { Component, PropTypes } from 'react';
import {MenuList, MenuItem, MenuButton, Dropdown, SubMenuItem} from 'react-menu-list';
import './Header.scss';

var _ = require('lodash');

function LI(props) {
  return (
    <div className="MenuItem">
    <MenuItem
      highlightedStyle={{background: 'gray'}}
      onItemChosen={e => {
        console.log(`selected ${props.children}, byKeyboard: ${e.byKeyboard}`);
      }}
      {...props}
    />
    </div>
  );
}


class Header extends Component {

  render() {
    
    return (
      <div className="lm_header_menu">
            <MenuButton
              menu={
             <div className='MenuList'>
                  <MenuList>
                      <LI>Console</LI>
                      <LI>Tile Code</LI>
                      <LI>Collector</LI>
                      <LI>Map</LI>
                      <LI>Docs</LI>
                      <LI>Controls</LI>
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
