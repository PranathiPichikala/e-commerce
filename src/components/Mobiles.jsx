import React, { useState } from "react";
import { Grid, Link } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import Data from "../components/Data";




const Mobiles = () => {
  const itemsPerPage = 4;
  const [page, setPage] = useState(0);

  const numPages = Math.ceil(
    (Data[0]?.SmartPhones?.OnePlus?.length || 0) / itemsPerPage
  );

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % numPages);
  };

  const handlePrevious = () => {
    setPage((prevPage) => (prevPage - 1 + numPages) % numPages);
  };

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>
      <div className="smartphones">
        <h2>One plus smartphones</h2>
      </div>
      <div className="buttons-container">
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      {console.log({Data}) }
      <Grid container rowSpacing={2} columnSpacing={5}>
        {(Data[0]?.SmartPhones?.Apple || [])
          .slice(startIndex, endIndex)
          .map((data, index) => (
            <Grid item lg={3} key={startIndex + index}>
              <div className="mobile-image">
                <img src={data.images} alt="Mobile" />
                <div className="mobile-image-content">
                  <Link title="realme C53 (Champion Gold, 64 GB)" href="#">
                    {data.title}
                  </Link>
                  <div className="rating">
                    <span>{data.rating}★</span>
                    <span>{data.stock}</span>
                  </div>
                  <div className="costtt">
                    <span>₹{data.price}</span>
                    <span>₹12,999</span>
                    <span>{data.discountPercentage}% off</span>
                  </div>
                </div>
                <div className="heart-icon">
                  <AiFillHeart color="#c2c2c2" />
                </div>
              </div>
            </Grid>
          ))}

       
      </Grid>
      <div className="smartphones">
        <h2>Poco smartphones</h2>
      </div>
      <div className="buttons-container">
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      <Grid container rowSpacing={2} columnSpacing={5}>
        {(Data[0]?.SmartPhones?.Poco || [])
          .slice(startIndex, endIndex)
          .map((data, index) => (
            <Grid item lg={3} key={startIndex + index}>
              <div className="mobile-image">
                <img src={data.images} alt="Mobile" />
                <div className="mobile-image-content">
                  <Link title="realme C53 (Champion Gold, 64 GB)" href="#">
                    {data.title}
                  </Link>
                  <div className="rating">
                    <span>{data.rating}★</span>
                    <span>{data.stock}</span>
                  </div>
                  <div className="costtt">
                    <span>₹{data.price}</span>
                    <span>₹12,999</span>
                    <span>{data.discountPercentage}% off</span>
                  </div>
                </div>
                <div className="heart-icon">
                  <AiFillHeart color="#c2c2c2" />
                </div>
              </div>
            </Grid>
          ))}

       
      </Grid>
      <div className="smartphones">
        <h2>Redme smartphones</h2>
      </div>
      <div className="buttons-container">
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      <Grid container rowSpacing={2} columnSpacing={5}>
        {(Data[0]?.SmartPhones?.Redme || [])
          .slice(startIndex, endIndex)
          .map((data, index) => (
            <Grid item lg={3} key={startIndex + index}>
              <div className="mobile-image">
                <img src={data.images} alt="Mobile" />
                <div className="mobile-image-content">
                  <Link title="realme C53 (Champion Gold, 64 GB)" href="#">
                    {data.title}
                  </Link>
                  <div className="rating">
                    <span>{data.rating}★</span>
                    <span>{data.stock}</span>
                  </div>
                  <div className="costtt">
                    <span>₹{data.price}</span>
                    <span>₹12,999</span>
                    <span>{data.discountPercentage}% off</span>
                  </div>
                </div>
                <div className="heart-icon">
                  <AiFillHeart color="#c2c2c2" />
                </div>
              </div>
            </Grid>
          ))}

       
      </Grid>
      <div className="smartphones">
        <h2>Motorola smartphones</h2>
      </div>
      <div className="buttons-container">
          <button onClick={handlePrevious}>&lt;</button>
          <button onClick={handleNext}>&gt;</button>
        </div>
      <Grid container rowSpacing={2} columnSpacing={5}>
        {(Data[0]?.SmartPhones?.Motorola || [])
          .slice(startIndex, endIndex)
          .map((data, index) => (
            <Grid item lg={3} key={startIndex + index}>
              <div className="mobile-image">
                <img src={data.images} alt="Mobile" />
                <div className="mobile-image-content">
                  <Link title="realme C53 (Champion Gold, 64 GB)" href="#">
                    {data.title}
                  </Link>
                  <div className="rating">
                    <span>{data.rating}★</span>
                    <span>{data.stock}</span>
                  </div>
                  <div className="costtt">
                    <span>₹{data.price}</span>
                    <span>₹12,999</span>
                    <span>{data.discountPercentage}% off</span>
                  </div>
                </div>
                <div className="heart-icon">
                  <AiFillHeart color="#c2c2c2" />
                </div>
              </div>
            </Grid>
          ))}

       
      </Grid>
    </div>
  );
};

export default Mobiles;
