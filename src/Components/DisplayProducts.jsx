import React, { useContext } from 'react'
import './display.css'
import staricon from "../assets/star_icon.png"
import stardull from "../assets/star_dull_icon.png"
import { ShopContext } from '../Context/ShopContext'

const DisplayProducts = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext);
    
    
  return (
    <>
        <div className='displayproduct'>
            <div className='display-left'>
                <div className='imglist'>
                    <img src={product.image}/>
                    <img src={product.image}/>
                    <img src={product.image}/>
                    <img src={product.image}/>
                </div> 
                <div className='mainimg'>
                <img className='mainimage' src={product.image}/>
                </div>
            </div>
            <div className='display-right'>
                     <h1>{product.name}</h1>
                    <div className='star'>
                        <img src={staricon}/>
                        <img src={staricon}/>
                        <img src={staricon}/>
                        <img src={staricon}/>
                        <img src={stardull}/>
                    </div>
                    <div className='display-price'>
                        <div className='oldpricce'>
                            ${product.old_price}
                        </div>
                        <div className='newprice'>${product.new_price}</div>
                    </div>
                    <div className='size'>
                        <h1>Select Size</h1>
                        <div className='select-size'>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button className='cart-btn' onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                    
            </div>

        </div>


    </>
  )
}

export default DisplayProducts