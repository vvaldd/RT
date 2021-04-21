import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from '../action-types'



const initialState = {
    productsInCart: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                
            }
        }

        default:
            return state;

    }
}
export default reducer