import React, { Component } from 'react';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <div clasName="main1">
        <div className="main">
          <h2>Zerai Adhanom</h2>
          <h6>
            I am a software Test enginer. I have over seven years’ experience of
            software integration, test development, validation strategies. I
            have executed manual and automation test on Android and Windows
            operating system for various mobile chipset.
          </h6>
          <h6>
            {' '}
            Also I am pasionate web developer. I have created dynamic, secure
            Web site from scratch; Please take a look at some of my projects.
          </h6>
        </div>
      </div>
    );
  }
}

export default Home;
