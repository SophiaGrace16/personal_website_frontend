import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src="https://i.imgur.com/rNcgEZG.png" className = "signature"/>
            <NavLink to="/" className="navbutton">Home</NavLink>
            <NavLink to="/links" className="navbutton">Links</NavLink>
            <NavLink to="/resume" className="navbutton">Resume</NavLink>
            <NavLink to="/projects" className="navbutton">Projects</NavLink>
      </nav>
    )
  }
}

export default NavBar