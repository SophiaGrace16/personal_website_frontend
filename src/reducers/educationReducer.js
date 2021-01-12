export default (state = [], action) => {
    switch(action.type){
        case "SET_EDUCATIONS":
            return [...action.payload]
        default:
            return state
    }
}