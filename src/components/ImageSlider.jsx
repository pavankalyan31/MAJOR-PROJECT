import React, { useState, useEffect } from 'react';

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds (3000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className='image-slider'>
      {slides.map((slide, index) => (
        <div
          className={index === currentSlide ? 'slide active' : 'slide'}
          key={index}
        >
          {index === currentSlide && <img src={slide.url} alt={`slide ${index}`} />}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
