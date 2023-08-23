import React from 'react';
import { Grid } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "../components/Data";
import "./css/SimiliarProducts.css";

const SimilarProducts = () => {
  const smartphones = Data[0]?.SmartPhones?.OnePlus;

  const settings = {
    dots: false, 
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1, 
    nextArrow: <div className="slick-arrow next-arrow">Next</div>, 
    prevArrow: <div className="slick-arrow prev-arrow">Prev</div>, 
  };

  return (
    <div className="_1fdd linear-grid-container ">
      <div className="smartphones">
        <h2>Similar Products</h2>
      </div>
      <Slider {...settings}>
        {smartphones?.map((data) => (
          <div className="_5hrk" key={data.id}>
            <img src={data.images} alt="Mobile" />
            <div className="mobile-image-content-similiar">
              <div className="mobile-image-title-similiar" href="#">
                {data.title}
              </div>
              <div className="rating-similiar">
                <span>{data.rating}★</span>
                <span>{data.stock}</span>
              </div>
              <div className="costtt-similiar">
                <span>₹{data.price}</span>
                <span>₹12,999</span>
                <span>{data.discountPercentage}% off</span>
              </div>
            </div>
            <div className="heart-icon">
              <AiFillHeart />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SimilarProducts;
