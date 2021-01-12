import React, { Component } from 'react'
import Education from '../components/resumeParts/Education'
import Experience from '../components/resumeParts/Experience'
import { connect } from 'react-redux'
import { fetchEducations } from '../actions/index'
import { fetchExperiences } from '../actions/index'



export class Resume extends Component {
  componentDidMount(){
    this.props.fetchEducations()
    this.props.fetchExperiences()
  }

  render() {
    const educations = this.props.educations.map(( education, i ) => <Education key={i} education={ education } />)
    const experiences = this.props.experiences.map(( experience, i ) => <Experience key={i} experience={ experience } />)
    return (
      <div>
        <h3>Technical Skills</h3>
        <ul>
        <p> Ruby, Rails, SQL, JavaScript, React, Bootstrap, OOP, BDD, TDD, CRUD, HTML5, CSS3, Git, MVC Backend
            Understanding of: Web Accessibility Standards, Photo Editing Software, Microsoft Office Suite, Google Suite, Novice Experience with Adobe Suite
        </p>
        </ul>
        
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
    experiences: state.experiences,
  }
}


export default connect(mapStateToProps, { fetchEducations }, { fetchExperiences })(Resume)