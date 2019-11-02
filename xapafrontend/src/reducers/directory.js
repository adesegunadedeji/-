

function directoryReducer(state = [], action){
    switch(action.type){
        case "FETCH":
            return{
                directoryArray:action.payload
        }
        default: 
        return state
    }
}
export default directoryReducer