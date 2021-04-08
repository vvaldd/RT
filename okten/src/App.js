import React, { useState } from "react";
import './App.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const AVAILABLE_RESOURSE = [
    'posts',
    'comments',
    'albums',
    'photos',
    'todos',
    'users',
]

function App() {
    // const [endpoint, setEndpoint] = useState('')
    // const [id, setId] = useState('')
    const [endpointField, setEnpoitField] = useState({
        endpoint: '',
        id: '',
    })

    const {endpoint, id} = endpointField;
    const onFieldUpdate = ({target: {name, value}}) => setEnpoitField({...endpointField, [name]: value})

    const [items, setItem] = useState([])
    const [singleItem, setSingleItem] = useState(null)

    const [errorMassege, setErrorMasage] = useState('')

    const onSubmit = () => {


        if(!endpoint) {
            return setErrorMasage('!endpoint');
        }

        if(!AVAILABLE_RESOURSE.includes(endpoint.trim().toLowerCase())) {
            return setErrorMasage('includes');
        }

        if(!Number(id) && id !== '' && Number(id) !== 0) {
            return setErrorMasage('No number or 0');
        }

        if((Number(id) <1 || Number(id) >100) && id !=='') {
            return setErrorMasage('1-100');
        }

        fetchData()
        setErrorMasage('')
    }



    const fetchData = async () => {
        const response = await fetch(`${BASE_URL}/${endpoint.trim().toLowerCase()}/${id.trim()}`);
        const json = await response.json();

        if(id) {
            setSingleItem(json)
            setItem([])
            return
        }

        setSingleItem([])
        setItem(json)

        console.log(json);
    }

    return (
        <div className="App">
            <h3>Fetch</h3>
            <input value={endpoint}
                   onChange={onFieldUpdate}
                   name='endpoint'
                   type='text'
                   placeholder='Please enter posts, comments, albums, photos, todos, users'/>
            <br/>
            <br/>
            <input value={id}
                   onChange={onFieldUpdate}
                   name='id'
                   type='text'
                   placeholder='Enter resource id: 1,2,3..'/>
            <br/>
            <br/>
            <button onClick={onSubmit}>Ok</button>

            <hr/>
            <div>
                {singleItem && JSON.stringify(singleItem)}
            </div>

            <hr/>
            <div>
                {items.map(value => (<div key={value.id}>{value.id} - {value.title}</div>))}
            </div>

            <h3>{errorMassege}</h3>
        </div>
    );
}

export default App;
