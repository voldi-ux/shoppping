import React from 'react'
import './collection_item.scss'
import Button from '../button/button'
import { connect } from 'react-redux'
import { AddItemToCart } from '../../redux/cart/cart_actions'

const CollectionItem  = ({item,addItem}) => {
    const { name,imageUrl,price } = item;
   return (
       <div className='collection-item'>
           <div className='image' style={{
               backgroundImage: `url(${imageUrl})`
           }}/>
           
          <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
          </div>
          <Button className='custom-button' inverted onClick={() => addItem(item)}>
              add to cart
          </Button>
       </div>
   )
}
   const mapDispatchToProps =dispatch => ({
       addItem: item => dispatch(AddItemToCart(item))
   })
   export default connect(null, mapDispatchToProps)(CollectionItem)