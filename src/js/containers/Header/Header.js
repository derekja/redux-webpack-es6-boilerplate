import React, { Component, PropTypes } from 'react';
import {MenuList, MenuItem, MenuButton, Dropdown, SubMenuItem} from 'react-menu-list';
import './Header.scss';

var _ = require('lodash');

var actions = require('../../actions/Actions');


function LI(props) {
  return (
    <MenuItem
      style={{cursor: 'pointer', userSelect: 'none'}}
      highlightedStyle={{background: 'gray'}}
      onItemChosen={e => {
        console.log(`selected ${props.children}, byKeyboard: ${e.byKeyboard}`);
      }}
      {...props}
    />
  );
}

class Header extends Component {

  render() {
    
    return (
      <div className="lm_header_menu">
            <MenuButton
              menu={
                <Dropdown className="lm_header_menu">
                  <MenuList>
                      <LI>About</LI>
                      <LI>Code</LI>
                      <LI>Map</LI>
                      <LI>Markdown</LI>
                    <hr style={{margin: '1px 0'}} />
                  </MenuList>
                </Dropdown>
              }
              >
              Menu Button
            </MenuButton>
      </div>
    );
    
  }
}

export default Header;
