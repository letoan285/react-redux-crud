export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_PRODUCT = 'LOAD_PRODUCT';
export const CREATE_PRODUCT= 'CREATE_PRODUCT';
export const DELETE_PRODUCT= 'DELETE_PRODUCT';

const initialState = [];
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
            state = action.payload
            return state;
        }
        case LOAD_PRODUCT: {
            state = action.payload
            return state;
        }
        case DELETE_PRODUCT: {
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        }
    
        case CREATE_PRODUCT: {
            return [...state];
        }
    }
    return state;
}