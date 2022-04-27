import React, { useState } from "react";
import { MenuItem } from "../menu-item/menu-item.component";
import "./hats.styles.scss";

export const Hats = (props) => {
  const [hats, setHats] = useState(hatsList);
  return (
    <div>
      <div>hats</div>
      <div className="menu">
        {hats.map((e) => (
          <MenuItem
            key={e.id}
            title={""}
            imageUrl={e.imageUrl}
            price={e.price}
          />
        ))}
      </div>
    </div>
  );
};

const hatsList = [
  {
    title: "Smula Organic Black Short Beanie",
    imageUrl: "https://hatstore.imgix.net/1562_1.jpg?&fit=fill",
    id: 1,
    price: "99$",
  },
  {
    title: "Original Pom Pom Burgundy Beanie",
    imageUrl: "https://hatstore.imgix.net/HS1004755_1.jpg?w=652&auto=compress ",
    id: 2,
    price: "49$",
  },
  {
    title: "Kids Classic Black Cuff",
    imageUrl:
      "https://hatstore.imgix.net/7340137526558_1.jpg?w=652&auto=compress",
    id: 3,
    price: "59$",
  },
  {
    title: "Fair Isle Snowstar® Beanie French Navy/White Pom",
    imageUrl: "https://hatstore.imgix.net/HS2124754_1.jpg?w=652&auto=compress",
    id: 4,
    price: "69$",
  },
  {
    title: "Icons Reg Beanie Brown Cuff",
    imageUrl:
      "https://hatstore.imgix.net/9353970835402_1.jpg?w=652&auto=compress",
    id: 5,
    price: "39$",
  },
];
