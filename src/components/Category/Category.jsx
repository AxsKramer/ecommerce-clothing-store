import React from "react";
import { useHistory } from "react-router-dom";
import "./Category.scss";

const Category = ({ category }) => {
  const history = useHistory();
  const { title, imageUrl, size, linkUrl } = category;

  return (
    <div
      className={`${size} category`}
      onClick={() => history.push(`/${linkUrl}`)}
    >
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default Category;
