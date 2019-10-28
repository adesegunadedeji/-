let initialState={
    color: "blue"
}

const colorReducer =(state=initialState, action) =>{
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
