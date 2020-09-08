import { createSelector } from 'reselect'

const cartSelector = state => state.cart
export const selectHidden = createSelector(cartSelector, cart => cart.hidden)
export const cartItems = createSelector(cartSelector, cart => cart.cartItems)
export const cartItemsTotal = createSelector(cartItems, items => items.reduce((acc,item)=> (acc + item.quantity),0))
export const cartItemsTotalPrice = createSelector(cartItems, items => items.reduce((acc,item)=> (acc + item.quantity * item.price),0))