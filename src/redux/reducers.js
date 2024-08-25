import { combineReducers } from 'redux';
// aca importamos todos los reducers
import defaultReducer from './default/defaultReducer';
import productReducer from './product/productReducer';
import formReducer from './form/formReducer';
import mainReducer from './main/mainReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productReducer,
    form: formReducer,
    main: mainReducer,
   
});

export default rootReducer;


