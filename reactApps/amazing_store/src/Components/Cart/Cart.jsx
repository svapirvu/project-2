import React from 'react';
import './Cart.css';

const Cart= () => {
    return(
        <a href="#">
            <div className="myCart">
                <i className="fas fa-cart-plus cart-icon"></i>
                <div className="myCart-text">My Cart</div>
                <div className="count"> 12 </div>
            </div>
        </a>

    )
}

export default Cart;