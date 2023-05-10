import React from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartItem";
import CartContext from "../../Store/cartContext";
import { useContext } from "react";

const HeaderCartButton = (props) =>{

    const cartCtx= useContext(CartContext)
    let quantity=0
     cartCtx.items.forEach((item) =>{
        return  quantity= quantity+  Number(item.quantity)
    },0)
    return(
     <button className={classes.button}  onClick={props.onClick}>
    <span className={classes.icon}>
    <CartIcon/>
    </span>
   
    <span>{cartCtx.message}</span>
    <span className={classes.badge}>
        {quantity}
    </span>
     </button>
    )

}

export default HeaderCartButton