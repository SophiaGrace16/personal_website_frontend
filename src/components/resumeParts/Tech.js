import React, { Component } from 'react'

class Tech extends Component {
  render() {
    return (
    <div>
        <div className="tech-wrapper">
            <div className ="tech-obj">
                <h3 className="tech-heading">Technologies</h3>
            </div>
            
            <div className="tech-list">
                <h5 className="tech-subhead">Languages & Programming Skills</h5>
                    <ul> 
                        <li> Ruby </li>
                        <li> Rails </li>
                        <li> Sinatra </li>
                        <li> SQL </li>
                        <li> Javascript </li>
                        <li> React </li>
                        <li> Redux </li>
                        <li> Object-Oriented Programming </li>
                        <li> Behaviour Driven Development </li>
                        <li> Test Driven Development </li>
                        <li> CRUD - Create, Read, Update, Delete </li>
                        <li> HTML5 </li>
                        <li> CSS3 </li>
                        <li> Git </li>
                        <li> MVC Backend </li>
                        <li> Bootstrap </li>
                    </ul>
            </div>

            <div className="tech-list">
                <h5 className="tech-subhead">Experience With</h5>
                    <ul>
                        <li>Web Accessibility Standards</li>
                        <li>Photo Editing Software</li>
                        <li>Microsoft Office Suite</li>
                        <li>Google Suite</li>
                        <li>Adobe Suite - Limited Experience</li>
                    </ul>
            </div>


        </div>
        
    </div>
     
    )
  }
}

export default Tech