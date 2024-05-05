import React from 'react'
import './footer.css'
import footer_logo from '../assets/shop monkeys.png'
import iglogo from '../assets/instagram.png'
import fblogo from '../assets/facebook.png'
import xlogo from '../assets/twitter.png'




const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={footer_logo} alt=''/>
            <p> Shop Monkeys </p>
        </div>
       
        <ul className='footer-links'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Direction</li>
        </ul>
        <div className='social-icon'>
            <div className='icon-container'>
                <img src={iglogo} alt=""/>
            </div>
            <div className='icon-container'>
                <img src={fblogo} alt=""/>
            </div>
            <div className='icon-container'>
                <img src={xlogo} alt=""/>
            </div>
            
        </div>
    </div>
  )
}

export default Footer