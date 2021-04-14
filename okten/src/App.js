//import React, {useState, createContext, useContext} from "react";
//import {Switch, Router, Route}
import './App.css';
//import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {createStore} from 'redux';


const initialState = {
    counter: 0
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: state.counter + 1
            }
        }

        case 'DEC': {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case 'RESET': {
            return {
                ...state,
                counter: 0
            }
        }

        default:
            console.log('action')
            return state;

    }
}
const store = createStore(reducer)

console.log(store);

store.subscribe(() => {
    console.log('tut', store.getState());
})

store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})


function App() {

    return (
        <h3>Hi</h3>
    );
}

export default App;
