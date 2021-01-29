import React from 'react';
import PictureWall from '../components/PictureWall'

const Intro = () => {
  return (
    <div>
      <div className="intro">

        <div className="intro-wrapper">

          <div className="hello-spot">
            <img src="https://i.imgur.com/orckL16.png" className="hello-img"/>
          </div>

          <div className="about-me">
            <b className="about-title">About Me</b>
            <p>
              <b className="about-subtitle">Teacher turned Fullstack Developer</b>
            </p> 

            <p>
              I am experienced in Ruby on Rails and JavaScript based programming. I have a passion for creating innovative, attractive and functional websites- starting from the initial idea, to the design and concept, and finally, creating a finished product. 
              I am a determined and dedicated life-long learner adept in a wide array of programming languages & web tools.
            </p>
          
          </div>

        </div>

        <div className="picture-wall">
            <PictureWall/>
        </div>

      </div>

    </div>
  );
}

export default Intro;


// import React, { Component } from 'react'
// import PictureWall from '../components/PictureWall'

// class Intro extends Component {
//   render() {
//     return (
//       <div className="intro">

//         <div className="intro-wrapper">

//           <div className="hello-spot">
//             <img src="https://i.imgur.com/sx2LiIl.png" className="hello-img"/>
//           </div>

//           <div className="about-me">

//             <b className="about-title">About Me</b>

//             <p>
//               <b className="about-subtitle">Teacher turned Fullstack Developer</b>
//             </p> 

//             <p>
//               I am experienced in Ruby on Rails and JavaScript based programming. I have a passion for creating innovative, attractive and functional websites- starting from the initial idea, to the design and concept, and finally, creating a finished product. 
//               I am a determined and dedicated life-long learner adept in a wide array of programming languages & web tools.
//             </p>
             
//           </div>
        
//         </div>

//         <div className="picture-wall">
//             <PictureWall/>
//         </div>

//       </div>

//     )
//   }
// }

// export default Intro

