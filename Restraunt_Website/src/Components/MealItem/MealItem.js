import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props =>{
   // console.log(props)
    const price = `$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3></div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            
            <MealItemForm item={props}/>
            </li>

       
    )
}

export default MealItem