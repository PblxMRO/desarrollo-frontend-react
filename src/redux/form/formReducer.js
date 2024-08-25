import { SET_FORM_DATA, RESET_FORM_DATA } from './formTypes'

const initialState = {
    //definir todas las variables de estado (EN ESTE CASO UN OBJETO)
    formData: {
        username: '',
        email: '',
        password:''
     },
      password: 'mod7ReactUSIP',
};

const formReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FORM_DATA:{
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        }
        case RESET_FORM_DATA:{
                return {
                    ...state,
                    formData: {}
                }
            }
        default:
          return state;
    }
}; 

export default formReducer;