import {
    loadProducts,
    toggleItemInCart,
    toggleItemInWishlist,
} from '../../redux/action-creators';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import styles from './Products.module.css';
import { Product } from '../index';

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

                <Product
                    product={el}
                    key={el.id}
                    onCartClick={() => dispatch(toggleItemInCart(el.id))}
                    onWishlistClick={() => dispatch(toggleItemInWishlist(el.id))}
                    isInCart={productsInCart.includes(el.id)}
                    isInWishlist={productsInWishlist.includes(el.id)}
                />
            ))}
        </div>
    )
}