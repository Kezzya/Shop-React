import React, { useState } from "react";
import { MenuItem } from "../menu-item/menu-item.component";
import { Homepage } from "../pages/homepage/homepage.component";
import "./directory.styles.scss";
const Directory = () => {
  const [sections, setSections] = useState(sectionsList);

  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
export default Directory;
const sectionsList = [
  {
    title: "hats",
    imageUrl:
      "https://media.istockphoto.com/photos/beautiful-girl-wearing-hat-picture-id1010215852?k=20&m=1010215852&s=612x612&w=0&h=wx9iGjfBFaUxexOMRyQMpjSGmT7oPOkVKgzUbH8iy04=",
    id: 1,
  },
  {
    title: "jackets",
    imageUrl:
      "https://media.istockphoto.com/photos/man-straightens-his-jacket-isolated-on-light-background-picture-id901960792?k=20&m=901960792&s=612x612&w=0&h=oPcnnS-x4uXpblatXRzaIELJMqpgKJtx0sWoEGM3vV0=",
    id: 2,
  },
  {
    title: "sneakers",
    imageUrl:
      "https://media.istockphoto.com/photos/cropped-closeup-image-view-photo-of-nice-attractive-feminine-fit-thin-picture-id1129341836?k=20&m=1129341836&s=612x612&w=0&h=-m49HyvXKD_wXESLKD09XPeqhUon0Q_IX8TQexwV2IA=",
    id: 3,
  },
  {
    title: "women",
    imageUrl:
      "https://media.istockphoto.com/photos/shopping-always-makes-her-happy-picture-id888019382?k=20&m=888019382&s=612x612&w=0&h=OLkoSIA4GdM0nQOPes5q5-LjINhBQfCdilss8IlQoJ8=",
    id: 4,
  },
  {
    title: "men",
    imageUrl:
      "https://media.istockphoto.com/photos/young-handsome-man-in-classic-suit-over-the-lake-background-picture-id1300966679?k=20&m=1300966679&s=612x612&w=0&h=kfnGrvP8QxvofPt5lMZV3Vliugfs27uuRLs49pYSO-k=",
    id: 5,
  },
];
