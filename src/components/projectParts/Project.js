
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Project extends Component {

    // constructor() {
    //         super();
    //         // this.state = {
    //         //     likes: 0
    //         // };
    // }

    render() {
        return (
            <div className="project-item">
                <h3 className="project-title">{this.props.project.projectName}</h3><br/>
                <Link to={`/projects/${this.props.project.id}`}>
                <img src={this.props.project.imageLink} alt= "image" className="project-main"/>
                </Link>
                {/* <button onClick={() => this.setState({ likes: this.state.likes +1})} className="like-button">Like: {this.state.likes}</button> */}
        </div>
        );
    }
}

export default Project;





// import React from 'react'


// // "destructure's" so I don't have to call props and I can just call project
// // destructuring allows us to see simpler versions of props
// const Project = ({ project }) => {
//     return (
//     <div className="project-item">
//         <h3 className="project-title">{project.projectName}</h3><br/>
//         <Link to={`/projects/${project.id}`}>
//         <img src={project.imageLink} alt= "image" className="project-main"/>
//         </Link>

//     </div>
    
//     );
// }

// export default Project