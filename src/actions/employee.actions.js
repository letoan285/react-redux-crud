import Axios from "axios";

export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE';
export const CREATE_EMPLOYEE= 'CREATE_EMPLOYEE';

export const loadEmployeesApi = () => {
    return dispatch => {
        return Axios.get('http://localhost:3030/api/employees').then(res => {
            dispatch(loadEmployees(res.data));
        });
    }
}

export const loadEmployees = (employees) => {
    return {
        type: LOAD_EMPLOYEES,
        payload: employees
    }
}