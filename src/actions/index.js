export const fetchEducations = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/educations')
        .then(resp => resp.json())
        .then(educations => {
            dispatch({ type: "SET_EDUCATIONS", payload: educations })
        })
    }
}

export const fetchExperiences = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/experiences')
        .then(resp => resp.json())
        .then(experiences => {
            dispatch({ type: "SET_EXPERIENCES", payload: experiences })
        })
    }
}

export const fetchProjects = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/projects')
        .then(resp => resp.json())
        .then(projects => {
            dispatch({ type: "SET_PROJECTS", payload: projects })
        })
    }
}

export const addProjects = project => {
    return (dispatch) => {
      fetch(`http://localhost:3000/projects/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project)
      })
        .then(resp => resp.json())
        .then(newProject => dispatch({ type: 'ADD_PROJECT', payload: newProject}))
    }
  }
