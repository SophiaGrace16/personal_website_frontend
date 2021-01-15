import React from 'react'

const Experience = ({ experience }) => {
    return (
        <div>
            <div className="experience-list">
                <h4 className="experience-subhead">{experience.company}</h4><br/>
                    Location: {experience.location}<br />
                    Position Title: { experience.jobTitle} <br />
                    Worked From: { experience.startDate} to { experience.endDate}<br />
                    Description: { experience.description} <br />
            </div>
        </div>

    
    );
}


export default (Experience)