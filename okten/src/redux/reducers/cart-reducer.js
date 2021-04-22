import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from '../action-types'

const initFromLS = localStorage.getItem('cart');

const initialState = initFromLS ? JSON.parse(initFromLS) : {
    productsInCart: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            }
        }
        case REMOVE_FROM_CART: {
            return {
                ...state,
                productsInCart: state.productsInCart.filter(el => action.payload !== el)
            }
        }

        default:
            return state;
    }
}
export default reducer