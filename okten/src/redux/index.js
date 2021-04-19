import { createStore, applyMiddleware } from 'redux';
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

    const {isAllowedToChange} = store.getState().counterReducer
    if(!isAllowedToChange && actionForCounter.includes(action.type)) {
        console.log('erunda oby4naya');
        return
    }

    next(action)

}


const middlewares = [protectCounter, logger];

export const store = createStore(
    reducer,
    applyMiddleware(...middlewares),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)