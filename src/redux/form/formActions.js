import { SET_FORM_DATA, RESET_FORM_DATA } from "./formTypes";

export const saveFormData = (fromData) =>{
    return{
        type: SET_FORM_DATA,
        payload: fromData,
    }
}

export const resetFormData = () =>{
    return{
        type: RESET_FORM_DATA,
    }
}

