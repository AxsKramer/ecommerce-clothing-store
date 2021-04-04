import React from "react";
import { useHistory } from "react-router-dom";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import "./Category.scss";

const Category = ({ category }) => {
  const history = useHistory();
  const [element, isIntersecting] = useIntersectionObserver({rootMargin: '0px'});
  const { title, imageUrl, size, linkUrl } = category;

  return (
    <div
      className={`${size} category`}
      onClick={() => history.push(`/${linkUrl}`)}
      ref={element}
    >
      {isIntersecting && (
        <>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
