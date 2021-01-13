import React, { Component } from 'react'

export default class ProjectShow extends Component {
  constructor(props) {
    super(props);

    let paramsId = parseInt(this.props.match.params.id)
    let project = props.projects.find( project => project.id === paramsId);

    this.state = {
      project: project ? project : { name: 'N/A', age: 'N/A', species: 'N/A'}
    }
  }


  render() {
    const { imageLink, projectName, summary, githubLink, demoLink } = this.state.project;
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
}
