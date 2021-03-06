import './DocsApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';




const ACTIVE = { color: 'red' }

class DocsApp extends Component {
 constructor(props, ctx) {
    super(props, ctx)
this.state = { url: '' }
  }


  render () {


    return (
      <div className="docsApp">
        <h1>Docs</h1>
    <ul>
          <li><Link      to="ab"           activeStyle={ACTIVE}>About</Link></li>
          <li><Link      to="fl"           activeStyle={ACTIVE}>FriendList</Link></li>
          <li><Link      to="md"           activeStyle={ACTIVE}>Mrkdown</Link></li>
          <li><Link      to="mp"           activeStyle={ACTIVE}>Map</Link></li>
     </ul>
      </div>
    );
  }
}


export {DocsApp};

