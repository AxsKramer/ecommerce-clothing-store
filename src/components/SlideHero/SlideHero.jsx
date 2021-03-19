import React, { useState, useEffect } from "react";
import './SlideHero.scss';

const SlideHero = ({images, interval}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      if (activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, interval);

    return () => clearInterval(tick);
  }, [activeIndex, images.length, interval]);

  return (
    <div className="Slide">
      <div className="Slide_Container">
        {images.map((image, index) => (
          <img
            loading='lazy'
            src={image.src}
            alt={image.title}
            key={image.src}
            className={
              index === activeIndex
                ? "Slide_Container_Img animaShow"
                : "Slide_Container_Img animaHide"
            }
          />
        ))}
        <div className="Slide_Container_Title">{images[activeIndex].title}</div>
      </div>
    </div>
  );
};

export default SlideHero;
