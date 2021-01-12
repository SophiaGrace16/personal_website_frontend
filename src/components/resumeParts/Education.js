import React from 'react'

const Education = ({ education }) => {
    return (
    <li className="collection-item">
      School: {education.school}<br />
      School Location: { education.location} <br />
      Dates Attended: { education.startDate} to { education.endDate}<br />
      Degree: { education.degree } <br />
    </li>
    );
}


export default (Education)