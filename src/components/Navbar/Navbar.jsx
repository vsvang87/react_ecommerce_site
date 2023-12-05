import React from 'react'
import "../../sass/navbar.scss";
import { PiSneaker } from "react-icons/pi";
import { CiShoppingCart } from "react-icons/ci";
import {NavLink, Link} from 'react-router-dom'; 

const Navbar = () => {
  return (
    <header>
        <div className="container">
        <nav>
            <div className="logo">
            <PiSneaker />
                <a href="/">
                 Shopper
                </a>
            </div>
            <ul className='nav-menu'>
                <li><NavLink to="/" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Shop</NavLink></li>
                <li><NavLink to="/men" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Men</NavLink></li>
                <li><NavLink to="/women" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Women</NavLink></li>
                <li><NavLink to="/kids" className={({isActive, isPending}) => isPending ? "pending" : isActive ? "active" : ""}>Kids</NavLink></li>
            </ul>
            <div className="cart-div">
                <Link to="/cart"><CiShoppingCart className='cart'/></Link>
                <span className='cart-count'>0</span>
                <Link to="/login" className='login-btn'>Login</Link>
            </div>
            
        </nav>
        </div>
    </header>
  )
}

export default Navbar