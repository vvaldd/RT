import './App.css';
import {
    startProductsAction,
    endProductsAction,
    setProductsAction,
    loadProducts,
} from './redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

const Products = () => {
    const { products, isLoading } = useSelector(store => store.products);

    console.log({products, isLoading});
    const dispatch = useDispatch();
    // const fetchProducts = async () => {
    //     try {
    //         dispatch(startProductsAction())
    //         const resp = await fetch('https://fakestoreapi.com/products');
    //         const json = await resp.json();
    //         dispatch(setProductsAction(json));

    //     } catch (e) {
    //         console.error(e);

    //     } finally {
    //         dispatch(endProductsAction());
    //     }
    // }


    useEffect(() => {
        dispatch(loadProducts());

    }, [])


    return (
        <div>
            {isLoading && (
                <h1>LOADING</h1>
            )}

            
            {!isLoading && !!products.length && products.map(el => (
                <div key={el.id} style ={{width: '50%', margin: '10px auto'}}>
                    <h3>{el.title}</h3>
                    <h4>{el.price}</h4>
                    <h5>{el.description}</h5>
                    <img style ={{width: '100%'}} src={el.image} alt={el.title} />
                    <hr />
                </div>
            ))}
        </div>
    )
}

function App() {

    return (
        <div>
            <Products />

        </div>
    );
}

export default App;
