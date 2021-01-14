import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ project }) => {
    return (
    <div className="project-item">
        <h4>{project.projectName}</h4>
        <Link to={`/projects/${project.id}`}>
        <img src={project.imageLink} alt= "image" className="project-main"/>
        </Link>
    </div>
    );
}


export default Project
