
import store from '../index'
export function  update(payload){
   
    return {
        type:"UPDATE",
        payload,
        
    }
}

export function ADD(payload){

     return {
         type:"ADD",
         payload
        
     }
}
export function PREV(payload){

    return {
        type:"PREV",
        payload
    }
}

export function ALL(payload){

    return {
        
        type:"ALL",
        payload
       
    }
}




 
