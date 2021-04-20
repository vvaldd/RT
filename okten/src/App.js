import './App.css';
import {
    incAction,
    decAction,
    resetAction,
    startProductsAction,
    endProductsAction,
    setProductsAction,
} from './redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
// import { PhotoList } from './componets'

const Products = () => {
    const { products, isLoading } = useSelector(store => store.productsReducer)
    console.log(products, isLoading);
    const dispatch = useDispatch();
    const fetcthProducts = async () => {
        try {
            dispatch(startProductsAction())
            const resp = await fetch('https://fakestoreapi.com/products');
            const json = await resp.json();
            dispatch(setProductsAction(json));
            console.log(json);
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(endProductsAction())
        }
    }


    React.useEffect(() => {
        fetcthProducts();
    }, [])


    return (
        <div>
            {isLoading && (
                <h1>LOADING</h1>
            )}
            <h3>producs list</h3>
        </div>
    )
}

function App() {
    const counter = useSelector(({ counterReducer: { counter } }) => {
        return counter
    });
    const dispatch = useDispatch();
    return (
        <div>
            {/* {!(counter % 2) && <PhotoList />} */}
            <Products />

            <h3>{counter}</h3>
            <button onClick={() => dispatch(incAction())}>Inc</button>
            <button onClick={() => dispatch(decAction())}>Dec</button>
            <button onClick={() => dispatch(resetAction())}>Reset</button>
        </div>
    );
}

export default App;
