import React from "react";
import "./header.styles.scss";

export const Header = (props) => {
  return (
    <div>
      <header className="header">
        <div className="span">
          <span>SHOP</span>
          <span>CONTACT</span>
          <span>SIGN IN</span>
        </div>
      </header>
    </div>
  );
};
