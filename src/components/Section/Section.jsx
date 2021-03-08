import React from "react";
import Spinner from '../Spinner/Spinner';
import "./Section.scss";

const Section = ({title, message, urlImage, hasSpinner}) => {
  return (
    <div className="section-image-overlay">
        {
          hasSpinner ? <Spinner /> : (
            <div className="section-image-container" style={{backgroundImage: `url(${urlImage})`}}>
              <h2>{title}</h2>
              <small>{message}</small>
            </div>
          )
        }
    </div>
  );
};

export default Section;
