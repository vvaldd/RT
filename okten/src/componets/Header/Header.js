import { useSelector } from 'react-redux';
import React, { useMemo } from 'react';
import styles from './Header.module.css'


export const Header = () => {
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
            <div className={styles.counters}>
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