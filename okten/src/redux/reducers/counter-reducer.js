import {
    INC,
    INC_CUSTOM,
    DEC,
    RESET,
} from '../action-types'

const initFromLS = localStorage.getItem('counter');


const initialState = initFromLS ? JSON.parse(initFromLS) : {
    counter: 0,
    isAllowedToChange: true,
}
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INC: {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case INC_CUSTOM: {
            return {
                ...state,
                counter: state.counter * action.payload
            }
        }

        case DEC: {
            return {
                ...state,
                counter: state.counter - 1
            }
        }

        case RESET: {
            return {
                ...state,
                counter: 0
            }
        }

        default:
            return state;

    }
}
export default reducer
