export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const CREATE_PRODUCT= 'CREATE_PRODUCT';
export const DELETE_PRODUCT= 'DELETE_PRODUCT';

const initialState = {
    products: [],
    product: {}
};
var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

export const productReducer = (state = initialState, action) => {
    var index = -1;
    var { id, payload } = action;
    switch(action.type) {
        case LOAD_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        case LOAD_PRODUCT: {
            return {
                ...state,
                product: action.payload
            };
        }
        case DELETE_PRODUCT: {
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        }
    
        case CREATE_PRODUCT: {
            return {
                ...state
            };
        }
    }
    return state;
}