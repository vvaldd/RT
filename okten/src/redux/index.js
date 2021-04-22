import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducers';
import {
    INC,
    RESET,
} from './action-types';

const logger = (store) => (next) => (action) => {
    console.log(action);

    const result = next(action);
    console.log('next state', store.getState());
    return result

}

const protectCounter = (store) => (next) => (action) => {
    const actionForCounter = [
        INC,
        RESET,
    ]

    const { isAllowedToChange } = store.getState().counterReducer
    if (!isAllowedToChange && actionForCounter.includes(action.type)) {
        console.log('erunda oby4naya');
        return
    }

    next(action)

}

const persister = (store) => (next) => (action) => {

    next(action);

    const { cart, wishlist } = store.getState();


    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

}

const customThunk = (store) => (next) => async (action) => {
    
    if (typeof action === 'function') {
        await action(store.dispatch);
    } else {
        next(action);
    }


}


const middlewares = [thunk/*customThunk*/, protectCounter, /*logger,*/ persister];

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)