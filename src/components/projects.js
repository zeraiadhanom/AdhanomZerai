import React, { Component } from 'react';
import ActivTracker from './ActivTracker.png';
import MovieAPI from './MovieAPI.png';
import Ychanel from './Ychanel.PNG';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <section className="border-top">
          <p>ActTracker: this is an app to help user record sport activity</p>
          <p>You can add users and display all activity</p>

          <div className="project_image">
            <a
              className="img-parent"
              href=" https://mysterious-brook-32861.herokuapp.com"
              target="_blank "
              rel="noopener noreferrer"
            >
              <img
                alt="ActivTracker"
                src={ActivTracker}
                className=""
                width="270"
                height="200"
              />
            </a>
          </div>
        </section>
        <section className="border-top">
          <p>NYT Movie Review</p>
          <div className="project_image">
            <a
              className="img-parent"
              href="https://zeraiadhanom.github.io/Capstone_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="MovieAPI"
                src={MovieAPI}
                className=""
                width="270"
                height="200"
              />
            </a>
          </div>
        </section>
        <section className="border-top">
          <p>Y-chanel</p>
          <div className="project_image">
            <a
              className="img-parent"
              href="https://zeraiadhanom.github.io/Capstone_API"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="MovieAPI"
                src={Ychanel}
                className=""
                width="270"
                height="200"
              />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
