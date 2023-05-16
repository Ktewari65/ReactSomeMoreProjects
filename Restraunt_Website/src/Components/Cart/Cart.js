import Modal from "../UI/Modal"
import classes from './Cart.module.css'
import CartContext from "../../Store/cartContext"
import { useContext } from "react"
import Card from "../UI/Card"

const Cart = (props)=>{
   
    const ctx = useContext(CartContext)
  
   
  
    const cartItem =   <ul className={classes['cart-items']} key='1'>
        {ctx.items.map((item,index) =>
        <li  key={index}>Name: {item.name} - Id:{item.id} -Quantity :{item.quantity} 
        <button className={classes.badge}  onClick={()=>ctx.removeItem(item.id)}>-</button></li>)}
        </ul>                                                                                        //<ul className={classes['cart-items']} key='1'>{[{id:'1', name:'Sushi', amount:'2', price:'$12'}].map((item) =><li>{item.name}</li>)}</ul>
  

   const Amount = ctx.items.reduce((curr, item) =>{
    return curr= curr+item.price
   },0)
    return(
        <Modal onClick={props.onClick}>
          <div >{cartItem}</div> 
        <div>
            <Card className={classes.total}>Total value paid:{Amount.toFixed(2)}$</Card>
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