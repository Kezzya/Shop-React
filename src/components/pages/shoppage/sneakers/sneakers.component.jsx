import React from "react";
import { MenuItem } from "../../../menu-item/menu-item.component";
import "./sneakers.styles.scss";
export const Sneakers = () => {
  return (
    <div className="menu">
      {sneakersList.map((e) => (
        <MenuItem key={e.id} title={""} imageUrl={e.imageUrl} price={e.price} />
      ))}
    </div>
  );
};
const sneakersList = [
  {
    title: "Huarache Run",
    imageUrl:
      "https://sneaker-street.ru/image/catalog/654275-110/2__w-500__h-500__f-webp.jpg",
    id: 1,
    price: "198$",
  },
  {
    title: "Jordan",
    imageUrl:
      "https://sneaker-street.ru/image/catalog/DC7702-001/2__w-500__h-500__f-webp.jpg",
    id: 2,
    price: "196$",
  },
  {
    title: "Waffle Trainer 2",
    imageUrl:
      "https://sneaker-street.ru/image/catalog/foto2/DH1349-001/2__w-500__h-500__f-webp.png",
    id: 3,
    price: "79$",
  },
  {
    title: "Lebron",
    imageUrl:
      "https://sneaker-street.ru/image/catalog/foto2/CV7562-103/2__w-500__h-500__f-webp.png",
    id: 4,
    price: "289$",
  },
  {
    title: "KD TREY 5 IX",
    imageUrl:
      "https://sneaker-street.ru/image/catalog/foto2/CW3400-006/2__w-500__h-500__f-webp.png",
    id: 5,
    price: "89$",
  },
];
