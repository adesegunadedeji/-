 function directoryReducer(state = [], action){
    console.log("Directory Reducer", state)
    switch(action.type === "GET_BUSINESS"){
        case "FETCH_BUSINESS":
            console.log("Fetched Business")
            return{
                state: action.payload
        }

        default: 
        return state
    }
}
export default directoryReducer