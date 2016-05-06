import './Docs.scss';
import '../../../styles/bootstrap.min.css'
import React, { Component, PropTypes } from 'react';
import MarkdownIt from 'markdown-it';
import mk from 'markdown-it-katex';
var hljs = require('highlight.js');

var Full_txt = require("raw!./Wiki_Full.txt");
var Home_txt = require("raw!./Wiki_Home.txt");
var Metadata_txt = require("raw!./Wiki_Metadata.txt");
var TileScript_txt = require("raw!./Wiki_TileScript.txt");
var Curr_txt = TileScript_txt;


var md = require('markdown-it')({
// the below function is supposed to work for syntax highlighting but does not at this point
// leaving it in in case we figure out how to do that.
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

md.use(mk);
var markeddown = md.render(Full_txt);

class Docs extends Component {

  render() {
    return (
       <div className="Docs" dangerouslySetInnerHTML={{__html: markeddown}}></div>
    );
  }
}

export default Docs;


