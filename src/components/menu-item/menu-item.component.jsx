import React from "react";
import { Link } from "react-router-dom";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, price }) => {
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <Link to={`/shop/${title}`}>
          <h1 className="title">{title.toUpperCase()}</h1>
        </Link>
        <span className="subtitle">SHOP NOW </span>
        <span>{price}</span>
      </div>
      <div> {price}</div>
    </div>
  );
};
