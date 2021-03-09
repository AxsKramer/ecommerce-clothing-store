import React, { useRef, useEffect, useState } from "react";

const useIntersectionObserver = (options) => {
  const element = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIntersecting(entries[0].isIntersecting);
      }
  },options);

  if(element.current){
    observer.observe(element.current);
  }

  return () => {
    if(element.current){
      observer.unobserve(element.current);
    }
  }

},[element, options]);

return [element, isIntersecting];
}

export default useIntersectionObserver;