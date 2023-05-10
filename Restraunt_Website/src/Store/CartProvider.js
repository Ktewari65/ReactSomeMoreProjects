
import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => { 
  const [addToCartItems, setAddToCartItems]= useState([])
  const[deletes,setDelete] = useState([])
 
   
    const addItemToCartHandler = (item) =>{
        setAddToCartItems([...addToCartItems,item])
    }

    const deleteItemToCartHandler= (id) =>{
         setDelete([...deletes])
    }


    const cartItems={
        items:addToCartItems,
        totalAmount:1,
        addItem:addItemToCartHandler,
        removeItem:deleteItemToCartHandler,
        message:'CART'
    }
  return(
    <CartContext.Provider  value={cartItems}>
     {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider