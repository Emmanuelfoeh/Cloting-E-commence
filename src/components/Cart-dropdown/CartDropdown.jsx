import React from "react";
import CustomButton from "../Custom-Button/CustomButton";
import CartItem from "../cart-items/CartItem";
import { connect } from "react-redux";
import "./Cartdropdown.scss";
import { selectCartItems } from "../../Redux/Cart/cart.selector";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKUP</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
