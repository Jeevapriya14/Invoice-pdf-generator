import { ADD_PRODUCT } from './actions';

const initialState = {
    products: []
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
};

export default rootReducer;
