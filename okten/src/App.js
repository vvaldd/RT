import './App.css';
import {
    startProductsAction,
    endProductsAction,
    setProductsAction,
    loadProducts,
    toggleItemInCart,
    toggleItemInWishlist,
} from './redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useMemo } from 'react';

const Header = () => {
    const { products } = useSelector(store => store.products);
    const { productsInCart } = useSelector(store => store.cart);
    const { productsInWishlist } = useSelector(store => store.wishlist);
    const calculatedCartSum = useMemo(() => {
        return products.filter(el => productsInCart
            .includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInCart]);

    const calculatedWishlistSum = useMemo(() => {
        return products.filter(el => productsInWishlist
            .includes(el.id))
            .reduce((acc, el) => acc += el.price, 0)
    }, [products, productsInWishlist]);

    return (
        <header>
            <h1>Header</h1>
            <div className='counters'>
                <span>
                    Wishlist: {productsInWishlist.length} ($ {calculatedWishlistSum} )
                </span>
                <span>
                    Cart: {productsInCart.length} ($ {calculatedCartSum} )
                </span>
            </div>
        </header>
    )
}

const Products = () => {
    const { products, isLoading } = useSelector(store => store.products);
    const { productsInCart } = useSelector(store => store.cart);
    const { productsInWishlist } = useSelector(store => store.wishlist);
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
                    <button style={{ backgroundColor: productsInWishlist.includes(el.id) ? 'cornsilk' : '' }}
                        onClick={() => dispatch(toggleItemInWishlist(el.id))}>
                        {productsInWishlist.includes(el.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</button>
                    <button
                        style={{ backgroundColor: productsInCart.includes(el.id) ? 'cornsilk' : '' }}
                        onClick={() => dispatch(toggleItemInCart(el.id))}>
                        {productsInCart.includes(el.id) ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
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
