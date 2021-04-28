import React, { useState, useEffect, useRef } from "react";
import './App.css';


function App() {
    const [counter, setCounter] = useState(0);
    const [counter1, setCounter1] = useState(1);
    const inc = () => {
        setCounter(prev => prev + 1); /*useState callback*/
        console.log(counter);
    }
    const inc1 = () => {
        setCounter1(prev => prev + 1); /*useState callback*/
        console.log(counter1);
    }
    // useEffect (() => {
    //     console.log(counter);
    // }, [counter])

    const complexLogic = useMemo(() => {    /*useMemo*/
        return fn(4, counter1)
    }, [counter1]);

    console.log(complexLogic);

    return (
        <div className="App">
            

            <button onClick={inc}>{counter}</button>
            <button onClick={inc1}>{counter1}</button>

        </div>
    );
}

export default App;


