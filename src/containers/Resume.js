import React, { Component } from 'react'
import Education from '../components/resumeParts/Education'
import Experience from '../components/resumeParts/Experience'
import Tech from '../components/resumeParts/Tech'
import { connect } from 'react-redux'
import { fetchEducations, fetchExperiences } from '../actions/index'



class Resume extends Component {
  componentDidMount(){
    this.props.fetchEducations()
    this.props.fetchExperiences()
  }

  render() {
    const educations = this.props.educations.map(( education, i ) => <Education key={i} education={ education } />)
    const experiences = this.props.experiences.map(( experience, i ) => <Experience key={i} experience={ experience } />)
    return (
      <div>
        <div className="heading">
          <img src="https://i.imgur.com/FX6xbNY.png" className="header"/>
        </div>
        <h3>Technical Skills</h3>
        <Tech/>
        <h3>Education</h3>
        <ul className="collection">
          { educations }
        </ul>

        <h3>Experience</h3>
        <ul className="collection">
          { experiences }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    educations: state.educations,
    experiences: state.experiences
  }
}


export default connect(mapStateToProps, { fetchEducations, fetchExperiences })(Resume)