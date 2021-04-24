import React from 'react';
import styles from './Product.module.css';

export const Product = ({ product, onCartClick, onWishlistClick, isInCart, isInWishlist }) => (
    <div key={product.id} className={styles.productItem}>
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <p>{product.description}</p>

        <button style={{
            backgroundColor: isInWishlist ? 'cornsilk' : ''
        }}
            onClick={onWishlistClick}>
            {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>

        <button
            style={{
                backgroundColor: isInCart ? 'cornsilk' : ''
            }}
            onClick={onCartClick}>
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>

        <img style={{ width: '100%' }} src={product.image} alt={product.title} />
        <hr />
    </div>
)
