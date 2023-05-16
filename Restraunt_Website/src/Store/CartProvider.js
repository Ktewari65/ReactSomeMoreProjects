
import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => { 
  const [addToCartItems, setAddToCartItems]= useState([])
  //const[cart,setCart]= useState([])
 
  console.log(addToCartItems)
    const addItemToCartHandler = (item) =>{
      //console.log(item)
      // setAddToCartItems([...addToCartItems,item])
       const index = addToCartItems.findIndex((items) =>items.id===item.id)
        if(index!==-1){
          const updatedCartItems = [...addToCartItems];
          //console.log(updatedCartItems)
             updatedCartItems[index].quantity += 1;
          setAddToCartItems(updatedCartItems)
        }
        else{
          setAddToCartItems([...addToCartItems, {...item, quantity:1}])
        }
    }

    const deleteItemToCartHandler= (id) =>{
      console.log(id)
           const list = addToCartItems.filter((item) =>
           item.id!==id
         ) 
         setAddToCartItems(list)
      
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