import './Code.scss';
import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
import {Button} from 'react-bootstrap';

import 'codemirror/mode/python/python';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

class Code extends Component {

  constructor(props) {
      super(props);
      
      this.state = {code: '# code',
          readOnly: false,
        mode: 'python'};
  }
  updateCode = (newCode) => {
      this.setState({
          code: newCode
      });
  }
  
  componentDidMount = () => {
      
      //console.log(this.refs);
      //console.log(this.refs.editor.codeMirror);
      this.refs.editor.codeMirror.refresh();
      
  }
  
  btnClick = () => {
      
      console.log("btnClick");
  }
  
  render() {
      var options = {
          lineNumbers: true
      };
    return (
      <div>
          <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
          <Button bsSize="large" onClick={this.btnClick}>Large button</Button>
      </div>
    )
  }
}

export default Code;

//<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />