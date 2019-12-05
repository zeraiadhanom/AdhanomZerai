import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/projects';
import Resume from './components/Resume';
import Publications from './components/publication';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <nav class="navbar navbar-expand-md">
          <a className="navbar-brand" href="Family.png">
            logo
          </a>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-toggle="collapse"
            data-target="#main-navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="main-navigation">
            <ul class="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-links">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Projects" className="nav-links">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Resume" className="nav-links">
                  Resume
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Publications" className="nav-links">
                  Publications
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Publications" component={Publications} />
        </div>
      </HashRouter>
    );
  }
}
export default Main;
