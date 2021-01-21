import React, { Component } from 'react'

class PictureWall extends Component {
  render() {
    return (
    <div className="picture-wrapper">
        <div className="pw">
            <img src="https://i.imgur.com/uot3WlQ.png" className="pw-img-first"/>
        </div>

        <div className="pw">
            <img src="https://i.imgur.com/EO7kZtH.png" className="pw-img"/>
        </div>

        <div className="pw">
            <img src="https://i.imgur.com/ptothF3.png" className="pw-img"/>
        </div>

        <div className="pw">
            <img src="https://i.imgur.com/AuraHD6.png" className="pw-img"/>
        </div>

        <div className="pw">
            <img src="https://i.imgur.com/MiOByUd.png" className="pw-img"/>
        </div>

        <div className="pw">
            <img src="https://i.imgur.com/U0RCHeY.png" className="pw-img-last"/>
        </div>

    </div>
    
    )
  }
}

export default PictureWall;