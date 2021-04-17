import './App.css';
import {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
} from './redux/action-creators'
import { useSelector, useDispatch } from 'react-redux';


function App() {
    const counter = useSelector(({ counter }) => counter);
    const dispatch = useDispatch();
    return (
        <div>
        <h3>{counter}</h3>
        <button onClick={() => dispatch(incAction())}>Inc</button>
        <button onClick={() => dispatch(incCustomAction(2))}>Inc Custon</button>
        <button onClick={() => dispatch(decAction())}>Dec</button>
        <button onClick={() => dispatch(resetAction())}>Reset</button>
        </div>
    );
}

export default App;
