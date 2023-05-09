import Modal from "../UI/Modal"
import classes from './Cart.module.css'

const Cart = ()=>{
  
    const cartItem = <ul className={classes['cart-items']} key='1'>{[{id:'1', name:'Sushi', amount:'2', price:'$12'}].map((item) =><li>{item.name}</li>)}</ul>
    console.log(cartItem)
    return(
        <Modal>
            {cartItem}
        <div>
            <span className={classes.total}>Total Amount</span>
            <span>45.6</span>
            <div className={classes.actions}>
                <button className={classes['button--alt ']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
        </Modal>
        
    )
}

export default Cart