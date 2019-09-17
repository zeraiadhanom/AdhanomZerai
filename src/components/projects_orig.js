import React, { Component } from 'react';
import ActivTracker from './ActivTracker.png';
import MovieAPI from './MovieAPI.png';
import Ychanel from './Ychanel.PNG';
import './project.css';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <section className="project-detail">
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
                width="50%"
                height="300"
              />
            </a>
            <div className="project-content">
              <p>Technology used: HTML, CSS,React, Redux, node.js, mongodb </p>
              <p>Live</p>
              <p>Source</p>
              <p>
                This app helps user to login and log all their daily sport
                activities The user can also update progress and track and view
                past activity
              </p>
            </div>
          </div>
        </section>
        <section className="project-detail">
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
                width="50%"
                height="300"
              />
            </a>
            <div className="project-content">
              <p>Technology used: HTML, CSS,React, Redux, node.js, mongodb </p>
              <p>Live</p>
              <p>Source</p>
              <p>
                This app helps user to login and log all their daily sport
                activities The user can also update progress and track and view
                past activity
              </p>
            </div>
          </div>
        </section>
        <section className="project-detail">
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
                width="50%"
                height="300"
                border-radius="20%"
              />
            </a>
            <div className="project-content">
              <p>Technology used: HTML, CSS,React, Redux, node.js, mongodb </p>
              <p>Live</p>
              <p>Source</p>
              <p>
                This app helps user to login and log all their daily sport
                activities The user can also update progress and track and view
                past activity
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
