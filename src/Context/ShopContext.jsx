import React,{createContext} from "react";
import all_product from '../assets/all_product';
export const ShopContext = createContext(null);
import { useState } from "react";

const getcart = ()=>{
        let cart = {};
        for(let index = 0; index < all_product.length+1; index++){
            cart[index] = 0;
        }
        return cart;
    }

const ShopContextProvider = (props) =>{
    
    const [cartItem,setCartItem] = useState(getcart());
    
   
    const addToCart = (itemid)=>{
        setCartItem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
       console.log(cartItem);
    }
    
    const removeFromCart = (itemid)=>{
        setCartItem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const getCartTotal = () => {
        let totalAmount= 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
                {
                    let itemInfo=all_product.find((product)=>product.id===Number(item));
                    totalAmount += itemInfo.new_price * cartItem[item];
                }
              
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalitems=0;
        for(const item in cartItem)
            {
             if(cartItem[item]>0)
                {
                    totalitems += cartItem[item];
                }   
            }
            return totalitems;
    }

    const contextValue ={all_product,cartItem,addToCart,removeFromCart,getCartTotal,getTotalCartItems};
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;