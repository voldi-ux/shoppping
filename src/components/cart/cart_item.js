import React, { Fragment } from "react";
import "./cart_item.scss";
const CartItem = ({ item: { name, price, quantity, imageUrl } }) => {
  return (
    <div className="cart-item">
        <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name"> {name}  </span>
        <span className="price"> 

          {price} X {quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
