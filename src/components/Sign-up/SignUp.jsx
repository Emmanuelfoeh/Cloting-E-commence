import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";
import CustomButton from "../Custom-Button/CustomButton";
import FormInput from "../Form-Input/FormInput";
import "./SignUp.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [input, setInput] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = input;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      setLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setInput({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      // ...
    } catch (error) {
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={input.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" disabled={loading}>
          SIGN UP
        </CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
