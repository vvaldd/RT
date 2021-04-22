import {
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
} from '../action-types'



const initialState = {
    productsInWishlist: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST: {
            return {
                ...state,                
            }
        }
        case REMOVE_FROM_WISHLIST: {
            return {
                ...state,            
            }
        }

        default:
            return state;
    }
}
export default reducer