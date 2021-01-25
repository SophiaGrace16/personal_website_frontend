import React from 'react'
import { Link } from 'react-router-dom'

// "destructure's" so I don't have to call props and I can just call project
// destructuring allows us to see simpler versions of props
const Project = ({ project }) => {
    return (
    <div className="project-item">
        <h3 className="project-title">{project.projectName}</h3><br/>
        <Link to={`/projects/${project.id}`}>
        <img src={project.imageLink} alt= "image" className="project-main"/>
        </Link>

    </div>
    
    );
}




export default Project
