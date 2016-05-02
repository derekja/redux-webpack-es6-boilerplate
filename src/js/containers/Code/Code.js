import './Code.scss';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Codemirror from 'react-codemirror';
import {Button} from 'react-bootstrap';
import {RunTile} from '../../actions/Actions';

import 'codemirror/mode/python/python';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';

class Code extends Component {

  constructor(props) {
      super(props);
      
      this.state = {code: '# code',
          readOnly: false,
        mode: 'python',
        txt: ''};
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
      
      const { gl } = this.props;
      const { store } = this.context;
      
  }
  onTxtChange = (event) => {
      this.setState({txt: event.target.value})
  }
  
  btnClick = () => {
      const { store } = this.context;
      let txt = this.state.txt;
      console.log("btnClick "+txt);
      store.dispatch({type: 'Run_Tile', txt});
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
    )
  }
}

 const mapStateToProps = (state) => {
      // whatever is returned will show up as props
      return {
        code: state.code  
      };
      
  }
  
  const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({type: RunTile}, dispatch);
  }
  
  Code.contextTypes = {
    store: React.PropTypes.object
};
  
export default connect(mapStateToProps, mapDispatchToProps)(Code);

