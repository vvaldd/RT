// export * from './counter-reducer';
// export * from './user-reducer';

import {combineReducers} from 'redux';



import counterReducer from './counter-reducer';
import userReducer from './user-reducer';
import productsReducer from './products-reducer';
import wishlistReducer from './wishlist-reducer';
import cartReducer from './cart-reducer';


export const reducer = combineReducers({
    counterReducer,
    userReducer,
    products: productsReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
})

