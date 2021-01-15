import React, { Component } from 'react'
import PictureWall from '../components/PictureWall'

class Intro extends Component {
  render() {
    return (
      <div className="intro">

        <div className="intro-wrapper">

          <div className="hello-spot">
            <img src="https://i.imgur.com/sx2LiIl.png" className="hello-img"/>
          </div>

          <div className="about-me">
            Hi there! My name is Sophia. I am a full-stack web developer. 
          </div>
        
        </div>

        <div className="picture-wall">
            <PictureWall/>
        </div>

      </div>

    )
  }
}

export default Intro