import React from "react";
import CustomButton from "../Custom-Button/CustomButton";
import CartItem from "../cart-items/CartItem";
import { connect } from "react-redux";
import "./Cartdropdown.scss";
import { selectCartItems } from "../../Redux/Cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router";
import { toggleCartHidden } from "../../Redux/Cart/Cart.action";
// import { withRouter } from "react-router";
const CartDropdown = ({ cartItems, dispatch }) => {
  const history = useHistory();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cart-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKUP
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
