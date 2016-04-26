import React, { Component, PropTypes } from 'react';
import './Header.scss';

var _ = require('lodash');

var actions = require('../../actions/Actions');

class Header extends Component {

  render() {
    return (
      <header>
        <h1>MENU</h1>
        <div className='sections'>
          <div className='section'>
            <span>About</span>
          </div>
          <div className='section'>
            <span>Open Window</span>
            <ul className='background-desktop'>
              <li>Editor</li>
              <li>Color Picker</li>
              <hr className='background-subtle' />
              <li>Template Browser</li>
              <li>Scheme Browser</li>
              <hr className='background-subtle' />
              <li>Save Scheme</li>
              <li>Import Scheme</li>
              <li>Export Scheme</li>
              <hr className='background-subtle' />
              <li>Import Template</li>
              <hr className='background-subtle' />
              <li>Settings</li>
              <li>Randomiser</li>
            </ul>
          </div>
          <div className='section'>
            <span>Workspace Layout</span>
            <ul className='background-desktop'>
              <li>Reset Layout</li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
