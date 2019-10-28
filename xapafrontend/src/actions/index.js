//Actions 

import axios from 'axios'

export const increment =() => {
    return {
        type: "INCREMENT"
    }
}
export const decrement =() => {
    return {
        type: "DECREMENT"
    }
}

export function loadColor (){
    return(dispatch => {
        return axios.get("http://www.colr.org/json/color/random").then((response) => {
            dispatch(changeColor("#"+response.data.new_color))
        })
    }
    )
}

export function changeColor(color){
    return {
        type: "CHANGE_COLOR",
        color: color
    }
}