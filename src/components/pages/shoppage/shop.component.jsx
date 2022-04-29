import React from "react";
import { Jackets } from "./jackets/jackets.component";
import { Hats } from "./hats/hats.component";
import { Link } from "react-router-dom";
import "./shoppage.styles.scss";
import { Sneakers } from "./sneakers/sneakers.component";

export const Shop = (props) => {
  return (
    <div>
      <h1>Collections</h1>
      <Link to={"/shop/hats"}>
        <h2>Hats</h2>
      </Link>
      <Hats />
      <Link to={"/shop/jackets"}>
        <h2>Jackets</h2>
      </Link>
      <Jackets />
      <Link to={"/shop/sneakers"}>
        <h2>Sneakers</h2>
      </Link>
      <Sneakers />
    </div>
  );
};
