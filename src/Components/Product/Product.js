import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";
import Rating from 'react-rating';

const Product = (props) => {
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    const { name, img, stock, price, seller } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}$</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <Rating
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                    readonly /><br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="purches-button"
                >{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;