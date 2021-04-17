import './App.css';
import {
    incAction,
    incCustomAction,
    decAction,
    resetAction,
    userAction,
} from './redux/action-creators';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ON_USERS_LOADED } from './redux/action-types';



const PhotoList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userReducer: {users}}) => users);
    const fetchPhotos = async () => {
        const response = await fetch('https://dummyapi.io/data/api/user?limit=10', {
            headers: {
                'app-id': 'lTE5abbDxdjGplutvTuc'
            }
        });
        const json = await response.json();
        console.log(json);
        dispatch(userAction(json.data))
    }
    useEffect(() => {
        if(!users.length) {
            fetchPhotos();
        }
        
    }, [])

    return (
        <div>
            {users.map(el => (
                <img key={el.id} src={el.picture} alt={el.firstName}/>
            ))}
        </div>
    )
}

function App() {
    const counter = useSelector(({ counterReducer: {counter} }) => {
        return counter});
    const dispatch = useDispatch();
    return (
    <div>
        {!!(counter % 2) && <PhotoList />}

        
        <h3>{counter}</h3>
        <button onClick={() => dispatch(incAction())}>Inc</button>
        <button onClick={() => dispatch(resetAction())}>Reset</button>
    </div>
    );
}

export default App;
