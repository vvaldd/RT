import React, { useState, useEffect, useRef } from "react";
import './App.css';


function App() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const age = useRef();
  const password = useRef();
  const form = useRef();
     
  const onOk = (e) => {
    e.preventDefault();
    
    // const {
      // target: [
      //   {value: firstName},
      //   {value: lastName},
      //   {value: email},
      //   {value: age},
      //   {value: password},
      // ]

      // target: {
      //   elements: {
      //     firstName,
      //     lastName,
      //     email,
      //     age,
      //     password,
      //   }
      // }
    // } = e;

    alert(JSON.stringify(
      {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        age: age.current.value,
        password: password.current.value,
      }, null, 2));

      // firstName.current.value = "";
      // lastName.current.value = "";
      // email.current.value = "";
      // age.current.value = "";
      // password.current.value = "";
      form.current.reset();
  }



  return (
    <div className="App">
      <form ref={form} onSubmit={onOk}>
        <h1>Input</h1>
        <input ref={firstName} type="text" name="firstName" placeholder='enter your first name' />
        <br />
        <br />
        <input ref={lastName} type="text" name="lastName" placeholder='enter your last name' />
        <br />
        <br />
        <input ref={email} type="email" name="email" placeholder='enter your email name' />
        <br />
        <br />
        <input ref={age} type="number" name="age" placeholder='enter your age' />
        <br />
        <br />
        <input ref={password} type="password" name="password" placeholder='enter your pass' />
        <br />
        <br />

        <button type="submit">Ok</button>
      </form>
    </div>
  );
}

export default App;
