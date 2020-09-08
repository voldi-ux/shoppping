import React from 'react'
import {ReactComponent as ShopIcon} from '../../assets/shop_bag.svg'
import { toggleCartHidden} from '../../redux/cart/cart_actions'
import './shop_icon.scss'
import { connect } from 'react-redux'
import {cartItemsTotal} from '../../redux/cart/cart_selectors'

const CartIcon = ({toggleCart, totalItems}) => (
    <div className='cart-icon' onClick={toggleCart}>
          <ShopIcon className='shopping-icon'/> 
          <span className='item-count'>
              {totalItems}
          </span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
})
const mapStateToProps = state => ({
  totalItems: cartItemsTotal(state)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
