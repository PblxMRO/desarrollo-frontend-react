import { SET_NAME_MODULE } from './defaultTypes'

const initialState = {
    //definir todas las variables de estao
    name: 'Desarrollo Front-End con React',
    age: 20,
    message: 'Este es un mensaje',
};

const defaultReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAME_MODULE:{
            return {
                ...state,
                name: action.payload,
            }
        }
        default:
          return state;
    }
    
}; 

export default defaultReducer;