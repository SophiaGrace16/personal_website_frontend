export default (state = [], action) => {
    switch(action.type){
        case "SET_EXPERIENCES":
            return [...action.payload]
            default:
                return state
        }
    }