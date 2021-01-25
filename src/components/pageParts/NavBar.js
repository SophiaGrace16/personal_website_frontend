import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      
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

    </div>
  );
}

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (

//       <nav>

//         <div>
//           <img src="https://i.imgur.com/rNcgEZG.png" className="signature" />
//         </div>
        
//         <div className="nav-links">
//             <NavLink to="/" className="navbutton">Home</NavLink>
//             <NavLink to="/resume" className="navbutton">Resume</NavLink>
//             <NavLink to="/projects" className="navbutton">Portfolio</NavLink>
//         </div>
            
//       </nav>

//     )
//   }
// }

// export default NavBar