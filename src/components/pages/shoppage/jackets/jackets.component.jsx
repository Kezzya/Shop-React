import React from "react";
import { MenuItem } from "../../../menu-item/menu-item.component";
export const Jackets = () => {
  return (
    <div className="menu">
      {jacketsList.map((e) => (
        <MenuItem key={e.id} title={""} imageUrl={e.imageUrl} price={e.price} />
      ))}
    </div>
  );
};
const jacketsList = [
  {
    title: "Vintage Relaxed Fit Trucker Jacket",
    imageUrl:
      "https://lsco.scene7.com/is/image/lsco/773800057-dynamic1-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=600",
    id: 1,
    price: "98$",
  },
  {
    title: "Sherpa Trucker Jacket",
    imageUrl:
      "https://lsco.scene7.com/is/image/lsco/levis/clothing/163650044-front-pdp.jpg?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=600",
    id: 2,
    price: "96$",
  },
  {
    title: "Trucker Jacket",
    imageUrl:
      "https://lsco.scene7.com/is/image/lsco/levis/clothing/723340134-front-pdp.jpg?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=600",
    id: 3,
    price: "79$",
  },
  {
    title: "Truckler Jacket",
    imageUrl:
      "https://lsco.scene7.com/is/image/lsco/723340557-dynamic1-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=600",
    id: 4,
    price: "89$",
  },
  {
    title: "Stook Trucker Jacket",
    imageUrl:
      "https://lsco.scene7.com/is/image/lsco/A08720001-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=450&hei=600",
    id: 5,
    price: "89$",
  },
];
