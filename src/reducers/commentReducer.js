export default (state = [], action) => {
    switch(action.type){
        case "SET_COMMENTS":
            return [...action.payload]
        case "ADD_COMMENT":
            return [...state, action.payload]
        case "REMOVE_COMMENT":
            let newComments = state.filter(comment => comment.id !== action.payload)
            return [...newComments]
            default:
                return state
    }
}