import React from 'react'
import './checkoutItem.scss'
import {connect} from'react-redux'
import { removeItem, AddItemToCart, reduceQTY } from '../../redux/cart/cart_actions'

const CheckoutItem = ({cartItem,dispatch}) => {
    const {imageUrl,price,quantity,name} = cartItem
    return(
    <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'> <span className='arrow' onClick={() => dispatch(reduceQTY(cartItem))} >&#10094;</span> {quantity} <span className='arrow' onClick={()=> dispatch(AddItemToCart(cartItem))} >&#10095;</span></span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={() => dispatch(removeItem(cartItem))} >&#10005;</div>
  </div>
)}

export default connect(null)(CheckoutItem)