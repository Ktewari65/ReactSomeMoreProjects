import Modal from "../UI/Modal"
import classes from './Cart.module.css'
import CartContext from "../../Store/cartContext"
import { useContext, useState } from "react"
import Card from "../UI/Card"

const Cart = (props)=>{
   
    const ctx = useContext(CartContext)
   // console.log(ctx)
    const[cart,setCart]= useState()

    const removeCartItems =(id)=>{
     // console.log(id)
      const list = ctx.items.filter((item) =>
    // console.log(item.name)
      item.name===id
         
      )
      setCart(list)
    }
  
    const cartItem =   <ul className={classes['cart-items']} key='1'>
        {ctx.items.map((item,index) =>
        <li key={index}>Name: {item.name} - Description:{item.description} Price :{item.price}
        <button  onClick ={()=>removeCartItems(item.name)}>-</button></li>)}
        </ul>                                                                                        //<ul className={classes['cart-items']} key='1'>{[{id:'1', name:'Sushi', amount:'2', price:'$12'}].map((item) =><li>{item.name}</li>)}</ul>
   // console.log(cartItem)

   const Amount = ctx.items.reduce((curr, item) =>{
    return curr= curr+item.price
   },0)
    return(
        <Modal onClick={props.onClick}>
            {cartItem}
        <div>
            <Card className={classes.total}>Total value paid:{Amount.toFixed(2)}</Card>
            <span></span>
            <div className={classes.actions}>
                <button className={classes['button--alt ']} onClick={props.onClick}>Close</button>
                <button className={classes.button} >Order</button>
            </div>
        </div>
        </Modal>
        
    )
}

export default Cart