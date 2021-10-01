import React from 'react';
import img from '../../images/giphy.gif';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div>
            <div className="place-order-img">
                <img className="img-border" src={img} alt="" />
            </div>
        </div>
    );
};

export default PlaceOrder;