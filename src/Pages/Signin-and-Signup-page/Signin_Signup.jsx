import React from "react";
import SignUp from "../../components/Sign-up/SignUp";
import SignIn from "../../components/SignIn/SignIn";
import "./Signin_signup.scss";

const Signin_Signup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Signin_Signup;
