import {
    userAction,
    badAction,
    removeBadAction,

} from '../../redux/action-creators';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterReducer } from '../../redux/reducers';

export const PhotoList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userReducer: {users}}) => users);
    const counter = useSelector(({counterReducer: {counter}}) => counter);
    const badEmployees = useSelector(({userReducer: {badEmployees}}) => badEmployees);
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
        console.log('1');

        //fetchPhotos();

        return () => console.log('2');        
        
    }, [])

    return (
        <div>
            {users.map(el => (
                <img
                style={{
                    filter: badEmployees.includes(el.id) ? 'blur(3px)' : ''
                }}
                onClick={() =>{
                    const alreadyInList = badEmployees.includes(el.id)
                    const anwser = !alreadyInList && window.confirm('Уверен?')
                    if (anwser) {
                        return dispatch(badAction(el.id))
                    }
                    alreadyInList && dispatch(removeBadAction(el.id))
                }}
                key={el.id} src={el.picture} alt={el.firstName}/>
            ))}
        </div>
    )
}