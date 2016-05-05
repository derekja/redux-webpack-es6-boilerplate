import * as types from '../../constants/ActionTypes';
import './Runbtn.scss';
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Runbtn extends Component {

  constructor(props) {
      super(props);
      
      this.state = {viewBtnDisabled: true};
      const { gl } = this.props;
      gl.eventHub.on(types.Results_Ready, this.resultsReady);
      
  }

  resultsReady = () => {
      this.setState({viewBtnDisabled: false});
  }
  
  runClick = () => {
      const { gl } = this.props;
      console.log("runClick");
      this.setState({viewBtnDisabled: true});
      gl.eventHub.emit(types.Run_Scripts);
      
  }
    viewClick = () => {
      const { gl } = this.props;
      console.log("viewClick");
      gl.eventHub.emit(types.View_Results);
      
  }
  
   render() {
      var options = {
          lineNumbers: true
      };
    return (
      <div className="Runbtn">
          <Button bsSize="large" onClick={this.runClick}>Run Algorithms</Button>
          <Button name="viewBtn" bsSize="large" onClick={this.viewClick} disabled={this.state.viewBtnDisabled}>View Results</Button>
      </div>
    );
  }
}

export default Runbtn;