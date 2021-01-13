import React from 'react'

const Project = ({ project }) => {
    return (
    <li className="collection-item">
      <b>{project.projectName}</b> <br />
      <img src={project.imageLink} alt= "image"/><br />
      Description: { project.summary}<br />
      <a href={project.githubLink} target="_blank">Github Repository</a><br />
      <a href={project.demoLink} target="_blank">Video Demonstration</a>
    </li>
    );
}


export default (Project)