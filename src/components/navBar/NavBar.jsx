import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = (props) => {

    return <header className='app-header'>
        <nav className='nav-bar'>
            <div className='nav-bar-left'>
                <Link to='/' className="app-logo" itemProp='url'>
                    <picture>
                        <source media="(min-width:650px)" srcSet='/static/images/logo.png' />
                        <source media="(max-width:650px)" srcSet='/static/images/logo.png' />
                        <img src="static/images/logo.png" alt="" style={{ width: 'auto' }} />
                    </picture>
                </Link>
                <NavLink to='/home' itemProp='url'>
                    Home
                </NavLink>
                <NavLink to='/products' itemProp='url'>
                    Product
                </NavLink>
            </div>
            <div className='nav-bar-right'>
                <ul className="app-auth">
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/signup'>Signup</NavLink></li>
                </ul>
                <button className='cart-container'>
                    <img alt="add to cart" src="static/images/cart.svg" style={{ width: '30px' }}/>
                    <span>0 items</span>
                </button>
            </div>
        </nav>
    </header>
}
export default NavBar;