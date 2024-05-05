import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Reference from '../Components/Reference';
import DisplayProducts from '../Components/DisplayProducts';


const Products = (props) => {

    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product = all_product.find((e)=> e.id===Number(productId));
    // console.log(product);
    // console.log(productId);
  return (
    <>
    <Reference product={product}/>
    <DisplayProducts product={product}/>
    </>
  )
}

export default Products