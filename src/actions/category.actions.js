import Axios from "axios";

export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_CATEGORY = 'LOAD_CATEGORY';
export const CREATE_CATEGORY= 'CREATE_CATEGORY';

export const loadCategoriesApi = () => {
    return dispatch => {
        return Axios.get('http://localhost:3030/api/categories').then(res => {
            dispatch(loadCategories(res.data));
        });
    };
}

export const loadCategories = (categories) => {
    return {
        type : LOAD_CATEGORIES,
        payload: categories
    }
}

// export const createProductApi = (product) => {
//     return dispatch => {
//         return Axios.post('http://localhost:3030/api/products', product).then(res => {
//             dispatch(createProduct(res.data));
//         });
//     };
// }

// export const createProduct = (product) => {
//     return {
//         type : CREATE_PRODUCT,
//         payload: product
//     }
// }