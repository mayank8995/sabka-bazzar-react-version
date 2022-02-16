import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/cart/actionCreator';
import './cart.css'
const Cart = (props) => {
    const cartData = useSelector((state) => state.getCartData.items);
    const totalPrice = cartData.reduce((acc,curr) => {
        return acc + curr.price * curr.count
    },0)
    const dispatch = useDispatch()
    const increaseCount = (data) =>{
        dispatch(addItemToCart(data))
    }
    const decreaseCount = (data) =>{
        dispatch(removeItemFromCart(data))
    }
    return <div className='cart'>
        <div className='cart-header'>
            <span>My Item ({cartData.length} items)</span>
            <span onClick={() => props.close()}>X</span>
        </div>
        <div className="cart-body">
            {cartData.length > 0 ? <div className='cart-items'>
                {cartData.map((item,index) => {
                    return <div key={item.id} className="cart-detail">
                        <img width="50" height="50" src={item.image} alt={item.name} />
                <div className="cart-description">
                    <p>{item.name}</p>
                    <div className='modify-cart'>
                        <div onClick={()=>decreaseCount(item)} className="increment">-</div><span>{item.count}</span><div className="decrement" onClick={()=>increaseCount(item)}>+</div><span>x</span><span>{item.price}</span>
                    </div>
                </div>
                <div>{item.count * item.price}</div>
                    </div>
                })}
            </div> : <div className='no-item'>
                <p>No items in your cart</p>
                <p>Your favourite items are just a click away</p>
                </div>}
        </div>
        <div className='cart-footer'>
            {cartData.length > 0 ? <button><span>Proceed to checkout</span> <span>Rs.{totalPrice}</span></button> : <button>Start Shopping</button>}
        </div>
    </div>
}

export default Cart;