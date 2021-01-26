import React from 'react'
import { useSelector } from 'react-redux'

// making use of the match object as a prop thats provided by router 
// desctructuring that object and making use of the projectId, through match.params

const ProjectShow = ({ match }) => {
  const {projectId} = match.params
  const singleProj = parseInt(projectId)-1
  const project = useSelector(state => state.projects[singleProj])

  if (!project) {
    return (
      <section>
        <h2>Uh oh! We could not find the project you wanted!</h2>
      </section>
    )
  }

  return (
    <div>
        <div className="project-wrapper">

            <div className="project-spot-one">
                <h4 className="project-title">{project.projectName}</h4> <br />
                <img src={project.imageLink} alt= "image" className="project-img"/><br />
            </div>
                
            <div className="project-spot-two">
                <h5>What was this project about?</h5>
                {project.summary}<br />
            </div>

            <a href={project.githubLink} target="_blank" ><img src="https://i.imgur.com/2Tqz4Yn.png" className="repo-button"/></a><br />

            <div>
              <h5>Video Demonstration</h5>
              <iframe width="560" height="315" src={project.demoLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>

        </div>
       
    </div>

  )
}

export default ProjectShow