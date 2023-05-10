//mport MealItem from "./MealItem"
import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import CartContext from '../../Store/cartContext'         //4
import { useContext } from 'react'
const MealItemForm = (props) =>{
      const ctx= useContext(CartContext)

      const addToCart=(event)=>{
         event.preventDefault();
         const quantity = document.getElementById('amount').value
         ctx.addItem({...props.item, quantity:quantity})
        // console.log(quantity)
         //console.log(ctx)
      }

    return(
        
            <form className={classes.form}  onSubmit={ctx.addItemToCartHandler}> 
          
            <Input  label='Amount'
             input= {{
             id:'amount' ,//+props.id,
             type:'number',
             min:'1',
             max:'5',
             step:'1',
            defaultValues:'1' ,  }}/>
  
             <button className={classes.formbutton} onClick={addToCart} >+Add</button>
            </form>
        
    )
}
export default MealItemForm