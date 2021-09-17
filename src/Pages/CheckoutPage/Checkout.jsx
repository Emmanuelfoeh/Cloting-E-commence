import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./checkout.scss";
import {
  selectCartItems,
  selectTotalCartItems,
} from "../../Redux/Cart/cart.selector";
import CheckoutItem from "../../components/Checkout-item/Checkout-item";

const Checkout = ({ cartItems, Total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">Total: ${Total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  Total: selectTotalCartItems,
});
export default connect(mapStateToProps)(Checkout);
