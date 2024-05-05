import React from 'react'
import { Link, Route } from 'react-router-dom'
import './item.css'
const Item = (props) => {
  return (

    
    <Link to={`/product/${props.id}`}> <div className='item'>
        <img src={props.image}/>
        <p>{props.name}</p>
        <div className='item-prices'>
        <div className='item-old-price'>
               Old Price ${props.old_price}
            </div>
            <div className='item-price-new'>
               Offer Price ${props.new_price}
            </div>
            
        </div>
    </div></Link>
  )
}

export default Item