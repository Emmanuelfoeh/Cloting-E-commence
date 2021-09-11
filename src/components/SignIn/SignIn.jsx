import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../Custom-Button/CustomButton";
import FormInput from "../Form-Input/FormInput";
import "./SignIn.scss";

const SignIn = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    const { email, password } = input;
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setInput({ email: "", password: "" });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={input.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          value={input.password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <div className="button">
          <CustomButton type="submit">Sign In</CustomButton>

          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
