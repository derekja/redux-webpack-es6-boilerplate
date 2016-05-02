import './About.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class About extends Component {

  render() {
    return (
      <div className="About">
        <h2>About</h2>
        <p>Non-information goes here.</p>
        <p>{this.props.txt}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  
  return {
    txt: state.app_reducer.txt
  };
}

export default connect(mapStateToProps)(About);

