import {
    userAction,
    badAction,
    removeBadAction,

} from '../../redux/action-creators';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const PhotoList = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userReducer: {users}}) => users);
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
        
        // if(!users.length) {
        //     fetchPhotos();
        // }
        
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