import React, { useEffect, useState } from 'react';
import './slider-style.css';

type props = {
  image: string[];
};

export const Slider = (props: props) => {
  const { image } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 3000);

    return () => clearInterval(timerID);
  }, [image.length]);

  return (
    <div className="slider">
      <img
        src={image[currentIndex]}
        alt="Plant Image"
        className="slider-image active-image"
        data-testid="slider-test"
      />
      <img
        src={image[(currentIndex + 1) % image.length]}
        alt="Plant Image"
        className="slider-image not-active"
        data-testid="slider-test"
      />
    </div>
  );
};
