import './MrkdownApp.scss';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MarkdownIt from 'markdown-it';
import mk from 'markdown-it-katex';


var txt = '**bugger markdown**: \n $\\sqrt(75 / 3) + det([[-1, 2], [3, 1]]) - \\sin(\\pi / 4)^2$';
var txt2 = 'c = $\\pm\\sqrt{a^2 + b^2}$ \n';
var txt3 = '# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$ \n';
var txt4 = txt3.concat(txt2);

var md = new MarkdownIt();


md.use(mk);
var foo = md.render(txt);
 


class Mrkdown extends Component {


  render() {
    return (
      <div>
        <h2>Markdown</h2>
        <div className="Mrkdown" dangerouslySetInnerHTML={{__html: foo}}>
        </div>
      </div>
    )
  }
}

export default Mrkdown;

