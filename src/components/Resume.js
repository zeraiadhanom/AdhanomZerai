import React, { Component } from 'react';
import resume from './Resume.pdf';

class Resume extends Component {
  render() {
    return (
      <div>
        <p> My resume</p>
        <img src={resume} className="image2" alt="application pdf" />
      </div>
    );
  }
}

export default Resume;
