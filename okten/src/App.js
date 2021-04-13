import React, {useState, createContext, useContext} from "react";
//import {Switch, Router, Route}
import './App.css';
import {Switch, BrowserRouter as Router, Route, Link} from 'react-router-dom'

const TodoContext = createContext();

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const onTodoCreate = (newTodo) => {
        if (!newTodo || !newTodo.title || !newTodo.description) return;

        setTodos([newTodo, ...todos]);
    }

    return (
        <TodoContext.Provider value={{
            todos,
            onTodoCreate
        }}>
            {children}

        </TodoContext.Provider>
    )
}


const TodosList = () => {
    const {
        todos
    } = useContext(TodoContext)

    return (
        <>
        {todos.map(el => (
            <>
            <h3>{el.title}</h3>
            <hr/>
            <p>{el.description}</p>
            </>
        ))}
        </>
    )
}

const AddTodo = () => {
    const [todoValues, setTodoValues] = useState({
        title: '',
        description: '',
    })

    const {
        todos,
        onTodoCreate
    } = useContext(TodoContext)

    console.log(todos);

    const onTodoChange = ({target: {name, value}}) => setTodoValues({...todoValues, [name]: value})

    const OnCreate = () => {
        onTodoCreate(todoValues)
        setTodoValues({
            title: '',
            description: '',
        })
    }
    return (
        <div>
            <input value={todoValues.title} onChange={onTodoChange} type="text" name='title' placeholder="add todo"/>
            <input value={todoValues.description} onChange={onTodoChange} type="text" name='description'
                   placeholder="todo description"/>

            <button onClick={OnCreate}>add todo</button>
        </div>

    )
}

const Header = () => {
    return (
        <header>
            <Link to='/'>list</Link>
            <Link to='/create-todo'>add new todo</Link>
        </header>
    )

}

function App() {

    return (
        <TodoProvider>
            <main>

                <Router>

                    <Header/>

                    <Switch>

                        <Route path="/" exact>
                            <TodosList/>
                        </Route>

                        <Route path='/create-todo'>
                            <AddTodo/>
                        </Route>

                    </Switch>
                </Router>

            </main>
        </TodoProvider>
    );
}

export default App;
