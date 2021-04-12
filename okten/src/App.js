import React, { useState, createContext, useContext } from "react";
//import {Switch, Router, Route}
import './App.css';

const CounterContext = createContext();


const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0);

    const incCounter = () => {
        setCounter(counter +1)
    }

    const decCounter = () => {
        setCounter(counter -1)
    }

    return(
        <CounterContext.Provider value={{
            counter,
            incCounter,
            decCounter
        }}>
            {children}
        </CounterContext.Provider>
    )

}

const Counter = () => {
    const { counter, incCounter, decCounter} = useContext(CounterContext);
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={incCounter}>inc</button>
            <button onClick={decCounter}>dec</button>
        </div>

    )
}

const Header = () => {
    const { counter } = useContext(CounterContext);
    return ( <div>

            <h3> Header counter = {counter}</h3>
        </div>

    )
}

function App() {

    return (
        <div className="App">
            <CounterProvider>

            <Header />

            <Counter />

            </CounterProvider>
        </div>
    );
}

export default App;
