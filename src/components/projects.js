import React, { Component } from 'react';
import ActivTracker from './ActivTracker.png';
import MovieAPI from './MovieAPI.png';
import Ychanel from './Ychanel.PNG';
import './project.css';

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Recent Projects</h1>
          <p>The following are some of projects accomplished in the year</p>
        </div>
        <div class="container">
          <div class="row">
            <div className="col-sm-6">
              <div className="project_image">
                <a
                  className="img-parent"
                  href=" https://activetracker.herokuapp.com"
                  target="_blank "
                  rel="noopener noreferrer"
                >
                  <img
                    alt="ActivTracker"
                    src={ActivTracker}
                    class="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div className="project-content">
                <p>
                  This app helps user to login and record all their daily sport
                  activities The user can also update progress and track and
                  view past activity
                </p>
                <p>
                  Technology used: HTML, CSS,React, Redux, node.js, mongodb{' '}
                </p>
                <a href="https://zeraiadhanom.github.io/Capstone_API">
                  <button className="live">Live</button>
                </a>
                <a href="https://github.com/zeraiadhanom/Capstone_API">
                  <button className="source">Source</button>
                </a>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="project_image">
                <a
                  className="img-parent"
                  href=" https://zeraiadhanom.github.io/Capstone_API"
                  target="_blank "
                  rel="noopener noreferrer"
                >
                  <img alt="ActivTracker" src={MovieAPI} class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div className="project-content">
                <p>
                  This app is a video player. User can login or create an
                  account and search any video of their interest and they can
                  play back. The app uses youtube API;
                </p>
                <p>
                  Technology used: HTML, CSS,React, Redux, node.js, mongodb{' '}
                </p>
                <a href="https://activetracker.herokuapp.com/">
                  <button className="live">Live</button>
                </a>
                <a href="https://github.com/zeraiadhanom/ActiveTrackerN">
                  <button className="source">Source</button>
                </a>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="project_image">
                <a
                  className="img-parent"
                  href=" https://mysterious-brook-32861.herokuapp.com"
                  target="_blank "
                  rel="noopener noreferrer"
                >
                  <img alt="ActivTracker" src={Ychanel} class="img-fluid" />
                </a>
              </div>
            </div>
            <div class="col-sm-6">
              <div className="project-content">
                <p>
                  The app uses New York times API. User can search any favorite
                  movie and the app will display reviews given by known critcs
                  on the movie;
                </p>
                <p>
                  Technology used: HTML, CSS,React, Redux, node.js, mongodb{' '}
                </p>
                <a href="https://zeraiadhanom.github.io/Capstone_API">
                  <button className="live">Live</button>
                </a>
                <a href="https://github.com/zeraiadhanom/Capstone_API">
                  <button className="source">Source</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
