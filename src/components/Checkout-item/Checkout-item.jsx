import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../Redux/Cart/Cart.action";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </span>
        <span className="value"> {quantity} </span>
        <span className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </span>
      </span>

      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
