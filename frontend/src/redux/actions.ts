export const ADD_PRODUCT = 'ADD_PRODUCT';

export const addProduct = (product: any) => ({
    type: ADD_PRODUCT,
    payload: product
});
