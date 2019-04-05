
import { combineReducers } from 'redux';
import { productReducer } from './product.reducers';
import { categoryReducer } from './category.reducers';
import {employeeReducer} from './employee.reducers';
import {userReducer} from './user.reducers';

const appReducers = combineReducers({
    productReducer,
    categoryReducer,
    employeeReducer,
    userReducer
})
export default appReducers;