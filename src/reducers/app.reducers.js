
import { combineReducers } from 'redux';
import { productReducer } from './product.reducers';
import { categoryReducer } from './category.reducers';
import {employeeReducer} from './employee.reducers';

const appReducers = combineReducers({
    productReducer,
    categoryReducer,
    employeeReducer
})
export default appReducers;