import React from 'react'
import './checkout.scss'
import { connect } from 'react-redux'
import { cartItems , cartItemsTotalPrice} from '../../redux/cart/cart_selectors'
import {createStructuredSelector} from 'reselect'
import  CheckoutItem  from '../../components/checkout/checkoutItem'
import StripeCheckout from '../../components/stripe_checkout/srtipe_checkout'

const Checkout = ({cartItems,totalPrice})=> (
   <h1> 
    <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${totalPrice}</div>
    <StripeCheckout totalPrice={totalPrice} />
  </div>
   </h1>
)

const mapStateToProps = createStructuredSelector({
    cartItems:cartItems,
    totalPrice: cartItemsTotalPrice
})
export default connect(mapStateToProps)(Checkout)