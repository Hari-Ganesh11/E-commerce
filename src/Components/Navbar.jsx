import React, { useContext, useState } from 'react'
import logo from "./assets/shop monkeys.png";
import cart from "./assets/cart logo.png";
import './nav.css';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';



const Navbar = () => {

  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <>
    <div className='nav'>
        <div className='nav-logo'>
        <NavLink to='/'><img className='nav-logoimg' src={logo} /></NavLink>
    <p>Shop Monkeys</p></div>
    <ul className='nav-menu'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/shopcategory/men'> Men</NavLink> </li>
        <li><NavLink to='/shopcategory/women'>Women</NavLink></li>
        <li><NavLink to='/shopcategory/kid'>Kids</NavLink></li>
        <div className='nav-cart'>
        <Link to='/cart'><img className='cart-logo' src={cart} alt="cart"/> </Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
    </ul>
    

    </div>
    </>
  )
}

export default Navbar