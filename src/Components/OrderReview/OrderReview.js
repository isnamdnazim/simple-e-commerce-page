import React from 'react';
import useProducts from '../../Hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>This is Order Review</h1>
            <h2>{products.length}</h2>
        </div>
    );
};

export default OrderReview;