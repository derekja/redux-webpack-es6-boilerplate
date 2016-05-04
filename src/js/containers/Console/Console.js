import './Console.scss';
import React, { Component } from 'react';



class Console extends Component {

constructor(props) {
      super(props);
      this.state = {txt: ''};
  }
  
  componentDidMount = () => {
      const { gl } = this.props;

      gl.eventHub.on('Run_Tile', this.runtile);
      
  }

runtile = (arg) => {
  
  this.setState({txt: arg});
  console.log(arg);
  
}

  render() {
    return (
      <div className="Console">
        <h2>Console Output</h2>
        <p>Output from the scripts that would normally be sent to the console appears here</p>
        <p>{this.state.txt}</p>
      </div>
    );
  }
}

export default Console;

