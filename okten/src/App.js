import React, { useState, useEffect, useRef } from "react";
import './App.css';


function App() {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  // const [password, setPassword] = useState('');

  const [userData, setUserData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      password: '',

  })

  const handleSubmit = () => {
      alert(JSON.stringify(
          userData
          // {firstName,
          // lastName,
          // email,
          // age,
          // password,}
      , null, 2))
      setUserData ({
          firstName: '',
          lastName: '',
          email: '',
          age: '',
          password: '',
      })
  }

  const updateUserData = (el) => {
        const {target: {name, value}} = el;
        if (name === 'firstName' && value.split(' ').length > 1) {
            setUserData({...userData, [name]: value, lastName: ''})
            return

        }

        if (name === 'age' && Number(value) >=60) {
            return
        }

        setUserData({...userData, [name]: value})

    }

  return (
    <div className="App">
      
        <h1>Input</h1>
        <input
            value={userData.firstName}
            onChange={updateUserData}
            type="text" name="firstName" placeholder='enter your first name' />
        <br />
        <br />
        <input
            value={userData.lastName}
            onChange={updateUserData}
            type="text" name="lastName" placeholder='enter your last name' />
        <br />
        <br />
        <input
            value={userData.email}
            onChange={updateUserData}
            type="email" name="email" placeholder='enter your email name' />
        <br />
        <br />
        <input
            value={userData.age}
            onChange={updateUserData}
            type="number" name="age" placeholder='enter your age' />
        <br />
        <br />
        <input
            value={userData.password}
            onChange={updateUserData}
            type="password" name="password" placeholder='enter your pass' />
        <br />
        <br />


        {userData.age > 25 ? (<h4>Старичело</h4>) : (<h4>Танцуй пока молодой</h4>)}
        {/*<h1>Input</h1>*/}
        {/*<input value={firstName} onChange={({target: {value}}) => setFirstName(value)} type="text" name="firstName" placeholder='enter your first name' />*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<input value={lastName} onChange={({target: {value}}) => setLastName(value)} type="text" name="lastName" placeholder='enter your last name' />*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<input value={email} onChange={({target: {value}}) => setEmail(value)} type="email" name="email" placeholder='enter your email name' />*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<input value={age} onChange={({target: {value}}) => setAge(value)} type="number" name="age" placeholder='enter your age' />*/}
        {/*<br />*/}
        {/*<br />*/}
        {/*<input value={password} onChange={({target: {value}}) => setPassword(value)} type="password" name="password" placeholder='enter your pass' />*/}
        {/*<br />*/}
        {/*<br />*/}


        <button onClick={handleSubmit}>submit</button>
      
    </div>
  );
}

export default App;
