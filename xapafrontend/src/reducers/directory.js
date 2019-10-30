

function directoryReducer(state = [], action){
    switch(action.type){
        case "FETCH":
            return{
                ...state,
                directoryArray:action.payload
        }

        case "ADD_BUSINESS":
                console.log("Added Business")
            return {
                state: "Added Business"
        }

        case "DELETE_BUSINESS":
            console.log('Delete Business')
        
            return {
                state: "Delete Business"
        }
                 
        case "UPDATE_BUSINESS":
            console.log('Update Business Business')
            return {
                state: "Update"
        }
        default: 
        console.log("This is default State", state)
        return state
    }
}
export default directoryReducer