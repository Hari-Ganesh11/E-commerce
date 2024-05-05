import React, { useContext } from 'react'
import './shopcat.css'
import { ShopContext } from '../Context/ShopContext'
import all_product  from '../assets/all_product'
import Item from '../Components/Item'
import props from 'prop-types'
import { useParams } from 'react-router-dom'


const ShopCategory = () => {
   const {all_product} =useContext(ShopContext);
   const {category} = useParams()
   console.log(category)
  return (
    <>
    <div className='shop-category'>
    	{/* <h1>shop category page</h1> */}
      {/* <div className='shopcategory-indexsort'></div>
        <p>
          <span>showing 1-12</span> out of 36
        </p> */}
        <div className='shopcategory-products'>
          {all_product.map((item,i) => {
            if(category===item.category){
return <Item   key={i} 
               id={item.id} 
               name={item.name} 
               image={item.image}
               new_price={item.new_price} 
               old_price={item.old_price}
        />
            }
          })}
        </div>
    </div>
    </>
  )
}

export default ShopCategory