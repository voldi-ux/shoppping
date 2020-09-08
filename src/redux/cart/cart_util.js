

export const addToCart = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem =>  cartItem.id === item.id)

  if(existingItem) {
      return cartItems.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
  }

  return [...cartItems, {...item, quantity: 1}]
}

export const removeItem = (cartItems, item) => {
  return cartItems.filter(cartItem => cartItem.id !== item.id)
}

export const reduceItemQTY = (cartItems,item) => {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id)
  if(existingItem) {
   if( existingItem.quantity > 1) {
     return cartItems.map(cartItem => cartItem.id === item.id? {...cartItem,quantity:cartItem.quantity - 1} : cartItem)
    } else {
              return [...cartItems]
    }
   }
}