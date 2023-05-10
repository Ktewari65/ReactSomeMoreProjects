import { Fragment } from "react"
import  ReactDOM  from 'react-dom'
import classes from './Modal.module.css'


const BackDrop = props =>{
    return <div className={classes.backdrop}  onClick={props.onClick}> </div>
}

const Overlay = props =>{
    return(
        <div className={classes.modal}> 
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const container = document.getElementById('modal')


const Modal = (props)=>{
  return <Fragment>
    {ReactDOM.createPortal(<BackDrop  onClick={props.onClick}/>,container)}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,container)}
 </Fragment>
       
    
}

export default Modal