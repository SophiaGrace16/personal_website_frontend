import React from 'react'
// import singleProject from '../components/projectParts/singleProject'
// import { connect } from 'react-redux'
import { useSelector } from 'react-redux'

const ProjectShow = ({ match }) => {
  const {projectId}   = match.params
  const singleProj = parseInt(projectId)-1
  const project = useSelector(state => state.projects[singleProj])
  const comments = project.comments.map((comment) =>
    <div key={comment.id}>
        {comment.name}
        {comment.content}
    </div>
);


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

            <div>
                <img src={project.imageLink} alt= "image" className="project-img"/>
                <b>{project.projectName}</b> <br />
            </div>
                
                
                Description: {project.summary}<br />
                <a href={project.githubLink} target="_blank">Github Repository</a><br />
                <a href={project.demoLink} target="_blank">Video Demonstration</a>  
                {project.comments.name}
        </div>
       
        <div>
            {comments}
        </div>

    </div>

  )
}

// How do I get the comments to render while linked via the backend

export default ProjectShow



// const mapStateToProps = state => {
//     return {
//       projects: state.comments
//     }
//   }