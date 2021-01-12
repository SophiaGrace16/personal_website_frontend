import React from 'react'

const Experience = ({ experience }) => {
    return (
    <li className="collection-item">
      Location: {experience.location}<br />
      Position Title: { experience.jobTitle} <br />
      Worked From: { experience.startDate} to { experience.endDate}<br />
      Description: { experience.description} <br />
    </li>
    );
}


export default (Experience)