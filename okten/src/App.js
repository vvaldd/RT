import React, { useState, useEffect, useRef } from "react";
import './App.css';


function App() {
  
  const [firstName, setFirstName] = useState('');
     
  const handleSubmit = () => {
    
  }



  return (
    <div className="App">
      
        <h1>Input</h1>
        <input value={firstName} onChange={({target: {value}}) => setFirstName(value)} type="text" name="firstName" placeholder='enter your first name' />
        <br />
        <br />
        <input type="text" name="lastName" placeholder='enter your last name' />
        <br />
        <br />
        <input type="email" name="email" placeholder='enter your email name' />
        <br />
        <br />
        <input type="number" name="age" placeholder='enter your age' />
        <br />
        <br />
        <input type="password" name="password" placeholder='enter your pass' />
        <br />
        <br />

        <button onClick={handleSubmit}>submit</button>
      
    </div>
  );
}

export default App;
