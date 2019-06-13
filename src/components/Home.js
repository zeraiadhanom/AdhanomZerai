import React, { Component } from 'react';
import image2 from './image2.jpg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div clasName="main">
        <img
          src={image2}
          className="image2"
          alt="image2"
          width="150"
          height="120"
        />
        <h2>Brief Introduction</h2>
        <p>
          My name is Richard; i am a software Test enginer. I have over seven
          years’ experience of software integration, test development,
          validation strategies. I executed manual and automation test on
          Android and Windows operating system for various mobile chipset.
        </p>
        <p>
          {' '}
          I am pasionate web developer. I have created dynamic, secure Web site
          from scratch; Please take a look some of my projects at portofilio.
        </p>

        <p>Please contact at below.</p>
      </div>
    );
  }
}

export default Home;
