import Axios from "axios";

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USER = 'LOAD_USER';
export const CREATE_USER= 'CREATE_USER';
export const DELETE_USER= 'DELETE_USER';


export const loadUsersApi = () => {
    return dispatch => {
        return Axios.get('http://localhost:3030/api/users').then(res => {
            dispatch(loadUsers(res.data))
        })
    }
}

export const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        payload: users
    }
}