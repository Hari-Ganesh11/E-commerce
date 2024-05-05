import React from 'react'
import { NavLink } from 'react-router-dom'
import './success.css'

const Success = () => {
  return (
    <>
    <div className='container'>
    <h1 className='successheader'> Order placed Successfully!!!!</h1>
    <h3 className='thanksnote'>Thanks for shopping with us!</h3>
    <p className='orderdetails'>Your Order details will be shared to you shortly through the provided email address.</p>
    <NavLink to='/'><button className='shopbtn'>Continue Shopping</button></NavLink>
    </div>
    </>
  )
}

export default Success