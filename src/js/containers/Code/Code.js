import './Code.scss';
import React, {Component} from 'react';
import Codemirror from 'react-codemirror';
import Button from 'react-button';

import 'codemirror/mode/python/python';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';


class Code extends Component {

  constructor(props) {
      super(props);

      this.state = {code: '# code',
          readOnly: false,
        mode: 'python'};
        console.log("start");
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
  btnClicked = () => {
      console.log(this);
      //this.props.glEventHub.emit( 'btnClick', this.state );
      
      //var foo =1; 
  }
  render() {
      var eventHub = this.props.glEventHub;
      //console.log(eventHub);
      var options = {
          lineNumbers: true
      };
    return (
        <div>
            <Codemirror ref="editor" value={this.state.code} onChange={this.updateCode} options={options} />
            <Button onClick={this.btnClicked} >Run</Button>
         </div>
    )
  }
}

export default Code;

//<Codemirror value={this.state.code} onChange={this.updateCode} options={options} />