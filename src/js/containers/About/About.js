import './About.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class About extends Component {

constructor(props) {
      super(props);
      this.state = {txt: ''};
  }
  
  componentDidMount = () => {
      const { gl } = this.props;

      gl.eventHub.on('Run_Tile', this.runtile)
      
  }

runtile = (arg) => {
  
  this.setState({txt: arg});
  console.log(arg);
  
}

  render() {
    return (
      <div className="About">
        <h2>About</h2>
        <p>Non-information goes here.</p>
        <p>{this.state.txt}</p>
      </div>
    )
  }
}

export default About;

