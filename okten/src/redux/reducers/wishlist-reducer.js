import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
} from '../action-types'

const initFromLS = localStorage.getItem('wishlist');

const initialState = initFromLS ? JSON.parse(initFromLS) : {
    productsInWishlist: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            return {
                ...state,
                productsInWishlist: [...state.productsInWishlist, action.payload]                
            }
        }
        case REMOVE_FROM_WISHLIST: {
            return {
                ...state,
                productsInWishlist: state.productsInWishlist.filter(el => action.payload !== el)            
            }
        }

        default:
            return state;
    }
}
export default reducer