import './TileCode.scss';
import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
import {Button} from 'react-bootstrap';
import {RunTile} from '../../actions/Actions';

import 'codemirror/mode/python/python';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

class TileCode extends Component {

  constructor(props) {
      super(props);
      
      this.state = {code: '# code',
          readOnly: false,
        mode: 'python',
        txt: ''};
  }
  
  componentDidMount = () => {
      
      //console.log(this.refs);
      //console.log(this.refs.editor.codeMirror);
      this.refs.editor.codeMirror.refresh();
      
      const { gl } = this.props;
      const { glhub } = this.props;
      
  }
  updateCode = (newCode) => {
      this.setState({
          code: newCode
      });
  }
  
  onTxtChange = (event) => {
      this.setState({txt: event.target.value});
  }
  
  btnClick = () => {
      const { glhub } = this.props;
      let txt = this.state.txt;
      console.log("btnClick "+txt);
      glhub.emit('Run_Tile', txt);
      
  }
  
   render() {
      var options = {
          lineNumbers: true
      };
    return (
      <div>
          <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
          <input type="text"  name="btnText" onChange={this.onTxtChange} value={this.state.txt}/>
          <Button bsSize="large" onClick={this.btnClick}>send text</Button>
      </div>
    );
  }
}


  
export default TileCode;

