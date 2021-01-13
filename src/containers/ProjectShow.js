import React from 'react'
import { useSelector } from 'react-redux'

const ProjectShow = ({ match }) => {
  const { projectId } = match.params

  const project = useSelector(state =>
    state.projects.find(project => project.id === projectId)
  )

  if (!project) {
    return (
      <section>
        <h2>Uh oh! We could not find the project you wanted!</h2>
      </section>
    )
  }

  return (
  <div>
    <img src={imageLink} alt= "image" className="project-img"/>
    <b>{projectName}</b> <br />
    Description: {summary}<br />
    <a href={githubLink} target="_blank">Github Repository</a><br />
    <a href={demoLink} target="_blank">Video Demonstration</a>  
  </div>
  )
}

export default ProjectShow