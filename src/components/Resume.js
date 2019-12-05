import React, { Component } from 'react';
//import resume from './resume1.jpg';
import Pdf from '../images/ZERAIADHANOM.pdf';

class Resume extends Component {
  render() {
    return (
      <div className="App">
        <iframe title="resume" src={Pdf} width="100%" height="100%">
          Resume
        </iframe>
      </div>
    );
  }
}

export default Resume;
