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




// export const addPet = pet => {
//     return(dispatch) => {
//         return fetch('http://localhost:3000/projects', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({pet:pet})
//         })
//         .then(resp => resp.json())
//         .then(pet => {
//             dispatch({ type: "ADD_PET", payload: pet })
//         })
//     }
// }

// export const removePet = petID => {
//     return(dispatch) => {
//         return fetch(`http://localhost:3000/pets/${petID}`,{
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(resp => resp.json())
//         .then(pet => {
//             dispatch({ type: "REMOVE_PET", payload: pet.id })
//         })
//     }
// }