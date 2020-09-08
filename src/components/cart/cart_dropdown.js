import React from 'react'
import Button from '../button/button'
import CartItem from './cart_item'
import {cartItems} from '../../redux/cart/cart_selectors'
import {connect} from  'react-redux'
import {  withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart_actions'
import { CartDropDownStyles,EmptyDiv, CartItems } from './cart_dropdown.style'


const DropDownCart = ({cartItems, history, dispatch}) => (
    <CartDropDownStyles as='div'>
        <CartItems >
             {cartItems.length ?  cartItems.map(item => (
                 <CartItem key={item.id} item={item} />
             )) : <EmptyDiv>
                  your cart is currently empty
                 </EmptyDiv>}
        </CartItems>
        <Button onClick={() =>{ history.push('/checkout')
                             dispatch(toggleCartHidden())
                            }}>
            check out
        </Button>
    </CartDropDownStyles>
)
const mapStateToProps = (state) => ({
  cartItems : cartItems(state)
})
export default withRouter(connect(mapStateToProps)(DropDownCart))