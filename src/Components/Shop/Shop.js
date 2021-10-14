import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    //product to be randered on ui
    const [displayProducts, setDisplayProducts] = useState([])

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            });
    }, []);

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products]);

    const handleAddToCart = (product) => {
        const exists = cart.find(prod => prod.key === product.key)
        let newCart = [];
        if (exists) {
            const remaining = cart.filter(pd => pd.key !== product.key)
            exists.quantity += 1;
            newCart = [...remaining, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        //save to local storage for now
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedproduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedproduct);
        console.log(matchedproduct.length);
    }

    return (
        <>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Find Your Product..."
                />
            </div>

            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart} />)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart} >
                        <Link to="/orderreview">
                            <button className="purches-button">Review Youe Order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;