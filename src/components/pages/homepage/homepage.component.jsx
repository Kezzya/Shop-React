import React from "react";
import Directory from "../../directory/directory.component";
import { MenuItem } from "../../menu-item/menu-item.component";
import "./homepage.styles.scss";
export const Homepage = (props) => {
  return (
    <div className="homepage darkTheme">
      <Directory />
    </div>
  );
};
