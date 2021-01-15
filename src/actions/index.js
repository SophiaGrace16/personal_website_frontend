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

// export const fetchComments = () => {
//     return(dispatch) => {
//         return fetch('http://localhost:3000/projects')
//         .then(resp => resp.json())
//         .then(projects => {
//             dispatch({ type: "SET_PROJECTS", payload: projects })
//         })
//     }
// }

export const addComment = comment => {
    return (dispatch) => {
      fetch(`http://localhost:3000/projects/${comment.project_id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
      })
        .then(resp => resp.json())
        .then(newComment => dispatch({ type: 'ADD_COMMENT', payload: newComment }))
    }
  }

  export const removeComment = comment => {
    return(dispatch) => {
        return fetch(`http://localhost:3000/projects/${comment.project_id}/comments`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(comment => {
            dispatch({ type: "REMOVE_PET", payload: comment.id })
        })
    }
}