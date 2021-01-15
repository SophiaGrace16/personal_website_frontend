import React from 'react'
import { fetchComments } from '../actions/index'
import Comment from '../components/projectParts/Comment'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const ProjectShow = ({ match }) => {
  const {projectId}   = match.params
  const singleProj = parseInt(projectId)-1
debugger
  const project = useSelector(state => state.projects[singleProj])
debugger

  if (!project) {
    return (
      <section>
        <h2>Uh oh! We could not find the project you wanted!</h2>
      </section>
    )
  }

  return (
  <div>
    <img src={project.imageLink} alt= "image" className="project-img"/>
    <b>{project.projectName}</b> <br />
    Description: {project.summary}<br />
    <a href={project.githubLink} target="_blank">Github Repository</a><br />
    <a href={project.demoLink} target="_blank">Video Demonstration</a>  

    <div>
    
    </div>


  </div>
  )
}

export default ProjectShow