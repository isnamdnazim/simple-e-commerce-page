import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        // shortcut way
        // product.quantity = !product.quantity ? 1 : product.quantity;

        if (!product.quantity) {
            product.quantity = 1;
        }

        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;



    return (
        <div>
            <h3>Order-Summery</h3>
            <h5>Item Orderd: {totalQuantity}</h5><br />
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping: ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;