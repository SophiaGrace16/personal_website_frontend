export default (state = [], action) => {
    switch(action.type){
        case "SET_PROJECTS":
            return [...action.payload]
        case "ADD_PROJECTS":
            return [...state, action.payload]
        default:
            return state

        }
    }