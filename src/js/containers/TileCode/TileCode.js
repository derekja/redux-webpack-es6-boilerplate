import './TileCode.scss';
import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
import {Button} from 'react-bootstrap';
import {RunTile} from '../../Action/Action';

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
      
  }
  updateCode = (newCode) => {
      this.setState({
          code: newCode
      });
  }
  
  
   render() {
      var options = {
          lineNumbers: true
      };
    return (
      <div>
          <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
      </div>
    );
  }
}


  
export default TileCode;

