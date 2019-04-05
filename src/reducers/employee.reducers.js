export const LOAD_EMPLOYEES = 'LOAD_EMPLOYEES';
export const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE';
export const CREATE_EMPLOYEE= 'CREATE_EMPLOYEE';

const initialState = [];
export const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_EMPLOYEES: {
            state = action.payload
            return state;
        }
    }
    return state;
}