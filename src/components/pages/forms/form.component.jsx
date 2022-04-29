import React from "react";
import GoogleLogin from "react-google-login";
import "./form.styles.scss";
export const Form = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <form>
      <div className="topText">I already have an account</div>
      <div>
        <input
          name="user-name"
          placeholder="username"
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
      <div className="btns">
        <button type={`submit`}>SIGN IN</button>
        <GoogleLogin
          clientId={`976450384989-qtmte0lv8plkj17c1mcgqdj36r4qp7gh.apps.googleusercontent.com`}
          buttonText="Log in with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </form>
  );
};
const handleLogin = async (googleData) => {
  const res = await fetch("/api/v1/auth/google", {
    method: "POST",
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  // store returned user somehow
};
