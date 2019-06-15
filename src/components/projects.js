import React, { Component } from 'react';
import ActivTracker from './ActivTracker.png';
import MovieAPI from './MovieAPI.png';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <section className="border-top">
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
      </div>
    );
  }
}

export default Projects;
