import React from 'react'

const Project = ({ project }) => {
    return (
    <div className="project-item">
        <h4>{project.projectName}</h4>
      <img src={project.imageLink} alt= "image" className="project-main"/>
      
    </div>
    
    );
}


export default Project