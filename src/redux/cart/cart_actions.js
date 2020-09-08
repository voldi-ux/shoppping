import cartTypes from './cart_types'

export const toggleCartHidden = () => ({
    type:cartTypes.TOGGLE_HIDDEN
})

export const AddItemToCart = (item) => ({
    type:cartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type:cartTypes.REMOVE_ITEM,
    payload: item
})

export const reduceQTY = item => ({
    type:cartTypes.REDUCE_ITEM_QTY,
    payload: item
})

export const clearCartOnSignOut = () => {
 console.log('i am being fired ')
    return ({
        type:cartTypes.CLEAR_CART
    })
}