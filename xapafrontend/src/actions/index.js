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
            console.log("This is the Response for Color API",response)
        })
    })
}


export function changeColor(color){
    return {
        type: "CHANGE_COLOR",
        color: color
    }
}

export function getDirectory(){
 return(dispatch =>{
        return axios.get("http://localhost:3001/directories").then(response =>{
            dispatch(getBusiness(response.data))
            // console.log("this is the response for Directory API", response)
        })
    })
}
export function getBusiness(business){
    return {
        type: "FETCH",
        payload: business
    }
}

export function addBusiness(business){
    return {
    type:'ADD_BUSINESS',
    payload:business
    }
}

export function deleteBusiness(Id)
{
    return {
    type:'DELETE_BUSINESS',
    payload:Id
    }
}

export function updateBusiness(business)
{
    return {
        type:'UPDATE_BUSINESS',
        payload:business
        }

}