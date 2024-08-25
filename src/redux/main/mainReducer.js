import { SET_MAIN_DATA } from "./mainTypes";

const initialState = {
    //definir todas las variables de estadO
    CONTENT: [],
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MAIN_DATA:{
            return {
                ...state,
                CONTENT: action.payload,
            }
        }
        default:
          return state;
    }
    
}; 

export default mainReducer;