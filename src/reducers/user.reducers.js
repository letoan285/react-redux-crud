export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USER = 'LOAD_USER';
export const CREATE_USER= 'CREATE_USER';
export const DELETE_USER= 'DELETE_USER';

const initialState = {
    users: [],
    user: {}
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_USERS: {
            return {...state, users: action.payload};
        }
        case LOAD_USER: {
            return {...state, user: action.payload};
        }
    }
    return state;
}