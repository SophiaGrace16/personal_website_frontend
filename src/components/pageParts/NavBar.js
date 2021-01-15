import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (

      <nav>

        <div>
          <img src="https://i.imgur.com/rNcgEZG.png" className="signature" />
        </div>
        
        <div className="nav-links">
          <NavLink to="/" className="navbutton">Home</NavLink>
            <NavLink to="/resume" className="navbutton">Resume</NavLink>
            <NavLink to="/projects" className="navbutton">Portfolio</NavLink>
        </div>
            
      </nav>

    )
  }
}

export default NavBar