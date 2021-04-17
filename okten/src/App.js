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
       
        </div>
    );
}

export default App;
