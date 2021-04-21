import './App.css';
import {
    startProductsAction,
    endProductsAction,
    setProductsAction,
    loadProducts,
} from './redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

const Header = () => {

    return (
        <header>
            <h1>Header</h1>

            <div className='counters'>
                <span>
                    Wishlist: 0
                </span>

                <span>
                    Cart: 0
                </span>


            </div>


        </header>
    )
}

const Products = () => {
    const { products, isLoading } = useSelector(store => store.products);

    console.log({ products, isLoading });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());

    }, [])


    return (
        <div className='productWraper'>
            {isLoading && (
                <h1>LOADING</h1>
            )}


            {!isLoading && !!products.length && products.map(el => (
                <div key={el.id} className='productItem'>
                    <h3>{el.title}</h3>
                    <h4>{el.price}</h4>
                    <h5>{el.description}</h5>
                    <button>Add to Wishlist</button>
                    <button>Add to Cart</button>
                    <img style={{ width: '100%' }} src={el.image} alt={el.title} />
                    <hr />
                </div>
            ))}
        </div>
    )
}

function App() {

    return (
        <div>
            <Header />

            <Products />

        </div>
    );
}

export default App;
