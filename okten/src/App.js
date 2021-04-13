import React, { useState, createContext, useContext } from "react";
//import {Switch, Router, Route}
import './App.css';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

const TodoConrext = createContext();

const TodoProvider = ({children}) => {


    return (
        <TodoConrext.Provider>
            {children}

        </TodoConrext.Provider>
    )
}


const TodosList = () => {
    return (
        <h3>todos list</h3>
    )
}

const AddTodo = () => {
    const [todoValues, setTodoValues] = useState({
        title: '',
        description: '',
    })

    const onTodoChange = ({target: { name, value } }) => setTodoValues({ ...todoValues, [name]: value})

    const OnCreate = () => {
        setTodoValues ({
            title: '',
            description: '',
        })
    }
    return (
        <div>
            <input value={todoValues.title} onChange={onTodoChange} type="text" name='title' placeholder="add todo"/>
            <input value={todoValues.description} onChange={onTodoChange} type="text" name='description' placeholder="todo description"/>

            <button onClick={OnCreate}>add todo</button>
        </div>

    )
}

const Header = () => {
    return(
        <header>
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
