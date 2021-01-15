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
          <img src="https://i.imgur.com/uM5jQ7T.png" className="header"/>
        </div>

        <div>

          <div className="resume-obj">
            <Tech/>
          </div>

          <div className="experience-wrapper">

              <div className ="experience-obj">
                  <h2 className="experience-heading">Experiences</h2>
              </div>

              <div className="resume-obj">
                  { experiences }
              </div>
          </div>


          <div className="education-wrapper">
              <div className ="education-obj">
                <h2 className="education-heading">Education</h2>
              </div>

              <div className="resume-obj">
                  { educations }
              </div>
          </div>

        </div>
        
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