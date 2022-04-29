import React from "react";
import { Link } from "react-router-dom";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, price }) => {
  return (
    <Link to={`/shop/${title}`} className="menu-item">
      <div
        id="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW </span>
        <span>{price}</span>
      </div>
    </Link>
  );
};
