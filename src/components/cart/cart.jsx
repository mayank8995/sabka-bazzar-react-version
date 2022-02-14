import React from 'react';
import { useState } from 'react';
import './cart.css'
const Cart = (props) => {
    const [data, setData] = useState('')
    return <div className='cart'>
        <div className='cart-header'>
            <span>My Item {0}</span>
            <span onClick={() => props.close()}>X</span>
        </div>
        <div className="cart-body">
        </div>
        <div className='cart-footer'>

        </div>
    </div>
}

export default Cart;