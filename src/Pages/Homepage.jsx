import React from 'react'
import heroimage from '../assets/hero image.jpg'
import './homepage.css'
import mensbanner from '../assets/banner_mens.png'
import womenbanner from '../assets/banner_women.png'
import kidsbanner from '../assets/banner_kids.png'
import { NavLink } from 'react-router-dom'
const Homepage = () => {
  return (
    <>
    <h1 className='herotext'>Explore the Next Gen Fashion with us </h1>
    <img className='heroimg' src={heroimage}></img>
    <div className='banner-container'>
      <h3 className='bannertext'> Our Exciting Offers </h3>
      <NavLink to='/shopcategory/men'><img src={mensbanner} alt=""/></NavLink>
      <NavLink to='/shopcategory/women'><img src={womenbanner} alt=""/></NavLink>
      <NavLink to='/shopcategory/kid'><img src={kidsbanner} alt=""/></NavLink>
    </div>
    </>
  )
}

export default Homepage