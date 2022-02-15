import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './cart.css'
const Cart = (props) => {
    const [data, setData] = useState('')
    const cartData = useSelector((state) => state.getCartData.items);
    const cartCount = useSelector((state) => state.getCartData.count);
    console.log("cartData>>>>",cartData)
    return <div className='cart'>
        <div className='cart-header'>
            <span>My Item ({cartCount} items)</span>
            <span onClick={() => props.close()}>X</span>
        </div>
        <div className="cart-body">
            {cartCount > 0 ? <div className='cart-items'>
                <div></div>
            </div> : <div className='no-item'>
                <p>No items in your cart</p>
                <p>Your favourite items are just a click away</p>
                </div>}
        </div>
        <div className='cart-footer'>
            {cartCount > 0 ? <button><span>Proceed to checkout</span> <span>Rs 187</span></button> : <button>Start Shopping</button>}
        </div>
    </div>
}

export default Cart;