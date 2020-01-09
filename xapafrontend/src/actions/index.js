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
        return axios.get(`${process.env.REACT_APP_BACKEND_ADDRESS}/directories`).then(response =>{
            dispatch(getBusiness(response.data))
            // console.log("this is the response for Directory API", response)
        }).catch((err)=>{
            console.log(err);
        })
    })
}

// export function createDirectory(){
//     axios.post(`http://localhost:3001/directories`).then(response =>{
//             console.log(createBusiness(response))
//             //    console.log("This is the Post Response for Directory", response)
//            }).catch((err)=>{
//             console.log("This is an Error from Create Directory",err); })
//    }



   export function createDirectory(){
    console.log("Directory was Created")
    return(dispatch =>{
           return axios.post(`http://localhost:3001/directories`).then(response =>{
            dispatch(createBusiness(response))
            //    console.log("This is the Post Response for Directory", response)
           }).catch((err)=>{
            console.log("This is an Error from Create Directory",err); })
        })
   }

export function createBusiness(formData){
    return {
    type:'CREATE_BUSINESS',
    payload:formData
    }
}


//    export function updateDirectory(id){
//     return(dispatch =>{
//            return axios.put(`http://localhost:3001/directories/${id}`).then(response =>{
//                dispatch(updateBusiness(response))
//                console.log("This is the Update Response for Directory", response)
//            }).catch((err)=>{
//             console.log(err);
//         })
//        })
//    }

   export function deleteDirectory(id){
    return(dispatch =>{
           return axios.delete(`http://localhost:3001/directories/${id}`).then(response =>{
               dispatch(deleteBusiness(response))
               console.log("This is the  Delete Response for Directory", response)
           }).catch((err)=>{
            console.log(err);
        })
       })
   }

export function getBusiness(business){
    return {
        type: "FETCH",
        payload: business
    }
}

export function deleteBusiness(id)
{
    return {
    type:'DELETE_BUSINESS',
    payload:id
    }
}

export function updateBusiness(id, formData)
{
    return {
        type:'UPDATE_BUSINESS',
        payload:id
        }

}