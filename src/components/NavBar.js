import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <NavLink to="/" className="brand-logo">Home</NavLink>
          <ul>
            <li><NavLink to="/links">Links</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar