import React, { Component } from 'react';
//import image2 from './prof.jpg';
import image2 from '../images/Family.png';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div clasName="main1">
        <img
          src={image2}
          className="image2"
          alt="image2"
          style={{
            alignSelf: 'center',
            borderWidth: 1,
            borderRadius: 75,
            resizeMode: 'cover',
            width: '550',
            height: '500',
            flex: 1
          }}
        />
        <div className="main">
          <h2>About Me</h2>
          <p>
            My name is Zerai; i am a software Test enginer. I have over seven
            years’ experience of software integration, test development,
            validation strategies. I have executed manual and automation test on
            Android and Windows operating system for various mobile chipset.
          </p>
          <p>
            {' '}
            Also I am pasionate web developer. I have created dynamic, secure
            Web site from scratch; Please take a look to some of my projects.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
