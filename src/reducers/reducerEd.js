export default (state = [], action) => {
    switch(action.type){
        case "SET_EDUCATIONS":
            return [...action.payload]
        case "SET_EXPERIENCES":
            return [...action.payload]
        case "SET_PROJECTS":
            return [...action.payload]
        default:
            return state
    }
}