import React, { useState, createContext, useContext } from "react";
//import {Switch, Router, Route}
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

const TodosList = () => {
    return (
        <h3>todos list</h3>
    )
}

const AddTodo = () => {
    return (
        <h5>add todo</h5>
    )
}

const Header = () => {
    return(
        <header style={{heigth: '50px', background: 'silver'}}>
            <Link to='/'>list</Link>
            <Link to='/create-todo'>add new todo</Link>
        </header>
    )

}
function App() {

    return (
        <main>

        <Router>

            <Header />

            <Switch>

                <Route path="/" exact>
                    <TodosList />
                </Route>

                <Route path='/create-todo'>
                    <AddTodo />
                </Route>

            </Switch>
        </Router>

        </main>
    );
}

export default App;
