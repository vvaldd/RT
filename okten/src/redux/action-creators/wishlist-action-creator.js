import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
} from '../action-types'

const addProductToWishlist = (id) => ({ type: ADD_TO_WISHLIST, payload: id });
const removeProductToWishlist = (id) => ({ type: REMOVE_FROM_WISHLIST, payload: id });

const toggleItemInWishlist = (id) => (dispatch, getState) => {
    const { wishlist: { productsInWishlist } } = getState();
    const alreadyExist = !!productsInWishlist.find(el => el === id);
    dispatch(alreadyExist ? removeProductToWishlist(id) : addProductToWishlist(id));
}

export {
    addProductToWishlist,
    removeProductToWishlist,
    toggleItemInWishlist,
}