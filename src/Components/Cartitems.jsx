import React, { useContext } from 'react'
import './cartitems.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png'
import { NavLink } from 'react-router-dom'
const Cartitems = () => {
    const {all_product,cartItem,removeFromCart,getCartTotal} = useContext(ShopContext);

  return (
    <div className='cartitems'>
        <div className='cartitem-main'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map( (e) => {
            if(cartItem[e.id]>0){
                console.log(e);
                return (<div>
                <div className='cartitem-main format'>
                    <img src={e.image}  alt=""className='product-icon'/>
                    <p>{e.name}</p>
                    <p>{e.new_price}</p>
                    <button className='quantity'>{cartItem[e.id]}</button>
                    <p>$ {e.new_price * cartItem[e.id] }</p>
                    <img className='remove-icon' src={remove_icon} alt="" onClick={()=>{removeFromCart(e.id)}}/>
                </div>
                <hr/>
            </div>);
            }
            return null;
        })}
        <div className='cartitems-down'>
            <div className='total'>
                <h1>Cart Total</h1>
                <div>
                    <div className='total-item'>
                        <p>Subtotal</p>
                        <p>${getCartTotal()}</p>
                        {console.log(getCartTotal())}
                    </div>
                    <hr/>
                    <div className='total-item'>
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className='total-item'>
                        <h3>Total</h3>
                        <h3>${getCartTotal()}</h3>
                    </div>
                </div>
                <NavLink to='/checkout'><button className='checkout-button'>PROCEED TO CHECKOUT</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Cartitems