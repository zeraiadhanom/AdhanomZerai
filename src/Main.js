import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/projects';
import Resume from './components/Resume';
import Contact from './components/contact';

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/Resume">Resume</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
