import {  useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from './Store/CartProvider'


function App() {
  

  const[cart,setCart]= useState(false)

  const ShowCartHandler =()=>{
    setCart(true)
  }

  const HideCartHandler= () =>{
    setCart(false)
  }
  return (
    
      <CartProvider>
       { cart && <Cart onClick={HideCartHandler}/>}
      <Header onClick={ShowCartHandler}/>
      <Meals />
      </CartProvider>
 
  );
}

export default App;
