import React, { Component } from 'react'
import { addProject } from '../actions/index'
import { connect } from 'react-redux'

export class ProjectNew extends Component {

  constructor(props) {
    super(props);

    this.state = {
        projectName: '',
        imageLink: '',
        summary: '',
        githubLink: '',
        demoLink: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // add the project
    this.props.addProject( this.state );
    // redirect to /projects
    this.props.history.push('/projects');
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className ="project-form">
        <h3>Create a Project</h3>

        <div className="input-field">
            <label htmlFor="projectName">
                <h4>Project Name</h4>
            </label>
            <input type="text" name="projectName" id="projectName" value={ this.state.projectName } onChange={ this.handleChange }/>
        </div>

        <div className="input-field">
            <label htmlFor="imageLink">
               <h4>Image Link</h4>
            </label>
            <input type="text" name="imageLink" id="imageLink" value={ this.state.imageLink } onChange={ this.handleChange }/>
        </div>

        <div className="input-field">
            <label htmlFor="summary">
                <h4>Summary</h4>
            </label>
            <textarea type="textarea" name="summary" id="summary" value={ this.state.summary } onChange={ this.handleChange }/>
          
        </div>

        <div className="input-field">
            <label htmlFor="githubLink">
                <h4>GitHub Repository Link</h4>
            </label>
            <input type="text" name="githubLink" id="githubLink" value={ this.state.githubLink } onChange={ this.handleChange }/>
          
        </div>

        <div className="input-field">
            <label htmlFor="demoLink">
                <h4>Link to Video Demo</h4>
            </label>
            <input type="text" name="demoLink" id="demoLink" value={ this.state.demoLink } onChange={ this.handleChange }/>
          
        </div>

        <input type="submit" value="Create Project" className="btn" />
      </form>
    )
  }
}

export default connect(null, { addProject })(ProjectNew)