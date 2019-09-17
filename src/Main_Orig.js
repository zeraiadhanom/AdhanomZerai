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
        <div>
          <ul className="header">
            <li>
              <NavLink to="/" className="nav-links">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" className="nav-links">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/Resume" className="nav-links">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/Publications" className="nav-links">
                Publications
              </NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Publications" component={Publications} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
