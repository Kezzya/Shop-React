import React from "react";
import "./registerForm.styles.scss";

export const RegisterForm = () => {
  return (
    <form className="form">
      <div className="topText">I do not have an account</div>
      <div>
        <input
          name="user-name"
          placeholder="username"
          className="inputText"
          required
        />
        <hr width={`160px`} />
      </div>
      <div>
        <input
          name="email"
          placeholder="email"
          className="inputText"
          required
        />
        <hr width={`160px`} />
      </div>
      <div className="passwordText">
        <input
          name="password"
          type={`password`}
          placeholder="password"
          className="inputText"
          required
        />
        <hr width={`160px`} />
      </div>
      <div className="passwordText">
        <input
          name="password"
          type={`password`}
          placeholder="confirm password"
          className="inputText"
          required
        />
        <hr width={`160px`} />
      </div>
      <div>
        <button className="signUp" type={`submit`}>
          SIGN UP
        </button>
      </div>
    </form>
  );
};
