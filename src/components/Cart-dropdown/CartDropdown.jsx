import React from "react";
import CustomButton from "../Custom-Button/CustomButton";
import "./Cartdropdown.scss";
const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKUP</CustomButton>
    </div>
  );
};

export default CartDropdown;
