import { SET_MAIN_DATA } from "./mainTypes";

export const setContent = ( data ) =>{
    return{
        type: SET_MAIN_DATA,
        payload: data,
    }
}