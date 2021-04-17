import './App.css';

import { useSelector, useDispatch } from 'react-redux';

function App() {
    const counter = useSelector(({ counter }) => counter);
    const dispatch = useDispatch();
    return (
        <div>
        <h3>{counter}</h3>
        <button onClick={() => dispatch({type: 'INC'})}>Inc</button>
        <button onClick={() => dispatch({type: 'INC_CUSTOM', payload: 2})}>Inc Custon</button>
        <button onClick={() => dispatch({type: 'DEC'})}>Dec</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
        </div>
    );
}

export default App;
