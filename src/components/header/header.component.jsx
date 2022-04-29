import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

export const Header = (props) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <header className="header darkTheme">
        <Link to={`/`}>
          <div>
            <img src="/logo.png" width={`86px`} />
          </div>
        </Link>
        <div className="span">
          <Link to={`/shop`}>
            <span>SHOP</span>
          </Link>
          <Link to={`/contacts`}>
            <span>CONTACTS</span>
          </Link>
          <Link to={`/signin`}>
            <span>SIGN IN</span>
          </Link>

          <img src="./darkTheme.svg" className="themeImg" />
        </div>
      </header>
    </div>
  );
};
