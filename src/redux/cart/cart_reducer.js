import types from './cart_types'
import { addToCart,removeItem, reduceItemQTY } from './cart_util'


const initialState = {
    hidden: true,
    cartItems:[]
}


const CartReducer = (state = initialState,action) => {
    switch(action.type) {
        case types.TOGGLE_HIDDEN: 
        return {
            ...state,
            hidden: !state.hidden
        }
        case types.ADD_ITEM: 
        return {
            ...state, 
            cartItems:addToCart(state.cartItems, action.payload)
        }
       case types.REMOVE_ITEM:
           return {
               ...state,
               cartItems:removeItem(state.cartItems, action.payload)
           }
           case types.REDUCE_ITEM_QTY: 
           return {
               ...state,
               cartItems: reduceItemQTY(state.cartItems,action.payload)
           }
           case types.CLEAR_CART:
               return {
                   ...state,
                   cartItems:[]
               }
        default:
            return state
    }
}

export default CartReducer