import './App.css';
import {
    incAction,
    decAction,
    resetAction,
} from './redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import { PhotoList } from './componets'


function App() {
    const counter = useSelector(({ counterReducer: {counter} }) => {
        return counter});
    const dispatch = useDispatch();
    return (
    <div>
        {!(counter % 2) && <PhotoList />}

        
        <h3>{counter}</h3>
        <button onClick={() => dispatch(incAction())}>Inc</button>
        <button onClick={() => dispatch(decAction())}>Dec</button>
        <button onClick={() => dispatch(resetAction())}>Reset</button>
    </div>
    );
}

export default App;
