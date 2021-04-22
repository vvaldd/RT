import {
    loadProducts,
    toggleItemInCart,
    toggleItemInWishlist,
} from '../../redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import styles from './Products.module.css'

export const Products = () => {
    const { products, isLoading } = useSelector(store => store.products);
    const { productsInCart } = useSelector(store => store.cart);
    const { productsInWishlist } = useSelector(store => store.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());

    }, [])

    return (
        <div className={styles.productWraper}>
            {isLoading && (
                <h1>LOADING</h1>
            )}

            {!isLoading && !!products.length && products.map(el => (
                <div key={el.id} className={styles.productItem}>
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