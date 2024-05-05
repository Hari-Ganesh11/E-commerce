import React from 'react'
import './checkout.css'
import { NavLink } from 'react-router-dom'
const Checkout = () => {
  return (
    <>
    <div class="container">
        <h2>Checkout</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" required/>
            <label for="contact">Contact Number:</label>
            <input type="tel" id="contact" name="contact" required/>
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required/>
            <NavLink to='/successpage'><input type="submit" value="Place Order"/></NavLink>
        </form>
        </div>
    </>
  )
}

export default Checkout