import React from 'react'

const Project = ({ project }) => {
    return (
    <div className="collection-item">
      <img src={project.imageLink} alt= "image" className="projectimg"/>
      <b>{project.projectName}</b> <br />
      Description: { project.summary}<br />
      <a href={project.githubLink} target="_blank">Github Repository</a><br />
      <a href={project.demoLink} target="_blank">Video Demonstration</a>
    </div>
    
    );
}


export default (Project)