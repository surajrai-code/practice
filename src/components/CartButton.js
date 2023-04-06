import React from 'react'
import { uiActions } from './store/ui-slice'
import { useDispatch } from 'react-redux'
const CartButton = (props) => {
    const dispatch=useDispatch();
    const toggleCartHandler=()=>{
        dispatch(uiActions.toggle());
    }
  return (
    <><button onClick={toggleCartHandler}>my Cart</button></>
  )
}

export default CartButton