import React, { Component } from 'react'
import { fetchProjects } from '../actions/index'
import Project from '../components/Project'
import { connect } from 'react-redux'

export class Resume extends Component {
    componentDidMount(){
      this.props.fetchProjects()
    }
  
    render() {
      const projects = this.props.projects.map(( project, i ) => <Project key={i} project={ project } />)
      return (
        <div className="heading">
          <img src="https://i.imgur.com/Aa2MXza.png" className="header"/>
            { projects }
        </div>
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
      projects: state.projects
    }
  }
  
  
  export default connect(mapStateToProps, { fetchProjects })(Resume)