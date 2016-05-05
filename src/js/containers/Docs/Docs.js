import './Docs.scss';
import React, { Component, PropTypes } from 'react';
import MarkdownIt from 'markdown-it';
import mk from 'markdown-it-katex';


var wikitxt = '# Urthecast development playground\n\n<p>The algorithms test kitchen is designed to allow quick experimentation with urthecast data in a flexible programming environment that requires virtually no setup. The user interface is at a very early stage and will change significantly over the coming weeks, but it is already functional. The playground can be accessed at: /n/nhttp://urthecast-rd.dev.urthecast.com/viewer/ /nIf you do not have access then please submit a request with your IP address. Soon it will be driven by gitlab permissions instead of needing a whitelist of IPs./n The scripts are written in python, version 2.7.5, and the programming model is based on a MapReduce paradigm. The tile script is executed on each individual tile in the request. (A request is currently the viewport in the web browser, although this will be expanded in the future.) Each tile script can send data to the collector. The collector is executed across the set of tiles when all results in the request have been returned./nCurrently, when the scripts are updated (both tile and collector) the user will push the "update algorithms" button and the tile script will begin to execute on each tile in the request. When the user presses the "view results" button the collector script will be executed.</p>';
var txt = '**bugger markdown**: \n $\\sqrt(75 / 3) + det([[-1, 2], [3, 1]]) - \\sin(\\pi / 4)^2$';
var txt2 = 'c = $\\pm\\sqrt{a^2 + b^2}$ \n';
var txt3 = '# Math Rulez! \n  $\\sqrt{3x-1}+(1+x)^2$ \n';
var txt4 = txt3.concat(txt2);

var md = new MarkdownIt();


md.use(mk);
var foo = md.render(wikitxt);
 


class Docs extends Component {


  render() {
    return (
      <div>
        <h2>Markdown</h2>
        <div className="Docs" dangerouslySetInnerHTML={{__html: foo}}>
        </div>
      </div>
    );
  }
}

export default Docs;

