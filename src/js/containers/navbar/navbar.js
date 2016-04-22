import React, { Component, PropTypes } from 'react';

class Navbar extends Component {


  render() {
    return (
<nav className="navbar navbar-default" role="navigation">
  <div className="navbar-header">
    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </button>    
  </div>
  <a className="navbar-brand" href="#">Brand</a>
  <div className="navbar-collapse collapse">
    <ul className="nav navbar-nav navbar-left">
        <li><a href="#">Left</a></li>
        <li><a href="#about">Left</a></li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <li><a href="#about">Right</a></li>
      <li><a href="#contact">Right</a></li>
    </ul>
  </div>
</nav>
    )
  }
}

export default Navbar;