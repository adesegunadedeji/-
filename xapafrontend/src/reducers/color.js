let initialState={
    color: "blue"
}

const colorReducer =(state=initialState, action) =>{
    console.log("Change Color",state)
    if (action.type ==="CHANGE_COLOR") {
        return {
            ...state,
            color: action.color        
       }
    } else{
        return{
            ...state
        }
    }
}
export default colorReducer
