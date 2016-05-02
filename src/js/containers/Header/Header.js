import React, { Component, PropTypes } from 'react';
import '../../../../node_modules/golden-layout/src/css/goldenlayout-light-theme.css';
import './Header.scss';

var _ = require('lodash');

var actions = require('../../actions/Actions');

class Header extends Component {

  render() {
    
    return (
      <div className="lm_header_menu">
        <button type="button" class="btn btn-primary">New Window</button>
      </div>
    )
    
  }
}

export default Header;
