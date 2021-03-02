import React from "react";
import { useHistory } from "react-router-dom";
import "./Category.scss";

const Category = ({ category }) => {
  const history = useHistory();
  const { title, imageURL, size } = category;

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push("/shop/title")}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Category;
