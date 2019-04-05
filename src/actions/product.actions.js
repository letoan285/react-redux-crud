import Axios from "axios";

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const CREATE_PRODUCT= 'CREATE_PRODUCT';
export const DELETE_PRODUCT= 'DELETE_PRODUCT';

export const loadProductsApi = () => {
    return dispatch => {
        return Axios.get('http://localhost:3030/api/products').then(res => {
            dispatch(loadProducts(res.data));
        });
    };
}

export const loadProducts = (products) => {
    return {
        type : LOAD_PRODUCTS,
        payload: products
    }
}

export const createProductApi = (product) => {
    return dispatch => {
        return Axios.post('http://localhost:3030/api/products', product).then(res => {
            dispatch(createProduct(res.data));
        });
    };
}

export const createProduct = (product) => {
    return {
        type : CREATE_PRODUCT,
        payload: product
    }
}

export const loadProductApi = (id) => {
    return dispatch => {
        return Axios.get(`http://localhost:3030/api/products/${id}`).then(res => {
            dispatch(loadProduct(res.data));
        });
    };
}

export const loadProduct = (product) => {
    return {
        type: LOAD_PRODUCT,
        payload: product
    }
}

export const deleteProductApi = (id) => {
    return dispatch => {
        return Axios.delete(`http://localhost:3030/api/products/${id}`).then(res => {
            dispatch(deleteProduct(id));
        });
    };
}
export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}
