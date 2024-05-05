import React from 'react'
import './ref.css'
import arrow from '../assets/breadcrum_arrow.png'
const Reference = (props) => {
    const{product}=props;
  return (
    <>
    <div className='ref'>
     Home <img src={arrow}/> Shop <img src={arrow}/> {product.category}<img src={arrow}/>
            {product.name}
    </div>
    </>
  )
}

export default Reference