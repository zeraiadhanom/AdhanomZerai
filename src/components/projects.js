import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Projects</h2>
        <section className="border-top">
          <div className="project_image">
            <a
              className="img-parent"
              href="https://symphesis.herokuapp.com/"
              target="_blank"
            >
              <img alt="Symphesis app image" src="./images/symphesis.png" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
