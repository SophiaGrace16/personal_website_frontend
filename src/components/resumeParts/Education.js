import React from 'react'

const Education = ({ education }) => {
    return (
      <div>
          <div className="education-list">
                <h4 className="education-subhead">{ education.degree }</h4> <br/>
                {education.school} | { education.location} | { education.startDate} to { education.endDate}
          </div>
      </div>
    
    );
}


export default (Education)