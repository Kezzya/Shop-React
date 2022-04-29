import React from "react";
import { Form } from "../forms/form.component";
import { RegisterForm } from "../forms/registerForm.component";
import "./sign-in.styles.scss";
export const SignIn = (props) => {
  return (
    <div className="forms">
      <Form />
      <RegisterForm />
    </div>
  );
};
