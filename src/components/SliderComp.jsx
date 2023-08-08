import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComp = ({ imagesslider }) => {
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (imagesslider && imagesslider.length > 0) {
      const timer = setInterval(() => {
        sliderRef.current.slickNext();
      }, 3000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [imagesslider]);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handleBack = () => {
    sliderRef.current.slickPrev();
  };

  if (!imagesslider || imagesslider.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    nextArrow: (
      <IconButton
        aria-label="Next"
        onClick={handleNext}
        sx={{ position: 'absolute', zIndex: 1, top: '50%', right: '10px', transform: 'translateY(-50%)' }}
      >
        
      </IconButton>
    ),
    prevArrow: (
      <IconButton
        aria-label="Previous"
        onClick={handleBack}
        sx={{ position: 'absolute', zIndex: 1, top: '50%', left: '10px', transform: 'translateY(-50%)' }}
      >
     
      </IconButton>
    ),
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Slider ref={sliderRef} {...settings}>
        {imagesslider.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComp;
