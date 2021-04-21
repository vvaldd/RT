import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from '../action-types'

const addProductToCart = (id) => ({ type: ADD_TO_CART, payload: id });
const removeProductToCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });

const toggleItemInCart = (id) => (dispatch, getState) => {
    console.log(getState(), id);
    const { cart: { productInCart } } = getState();
    const alreadyExists = !!productInCart.find(el => el === id);
    dispatch(alreadyExists ? removeProductToCart(id) : addProductToCart(id));
}

export {
    addProductToCart,
    removeProductToCart,
    toggleItemInCart,
}