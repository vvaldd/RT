import React, { useState, useEffect, useRef } from "react";
import './App.css';


function App() {
    const { counter, setCounter } = useState(0);
    const inc = () => {
        setCounter(counter + 1);
    }

    return (
        <div className="App">

            <button style={{weidth: '20px'}}>{counter}</button>

        </div>
    );
}

export default App;


