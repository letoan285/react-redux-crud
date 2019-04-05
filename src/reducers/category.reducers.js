export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';
export const LOAD_CATEGORY = 'LOAD_CATEGORY';
export const CREATE_CATEGORY= 'CREATE_CATEGORY';

const initialState = []

export const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_CATEGORIES: {
            state = action.payload
            return state;
        }

    }
    return state;
}

