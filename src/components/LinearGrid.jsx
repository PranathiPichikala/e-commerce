import { Grid, Link } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "./css/Mobile.css";

const LinearGrid = ({ header, items }) => {
  const itemsPerPage = 4;
  const numPages = Math.ceil(items.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % numPages);
  };

  const handlePrevious = () => {
    setPage((prevPage) => (prevPage - 1 + numPages) % numPages);
  };

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div className="linear-grid-container">
      <div className="smartphones">
        <h2>{header}</h2>
      </div>

      <Grid container rowSpacing={2} columnSpacing={5}>
        {visibleItems.map((data, index) => (
            <Grid item lg={3} key={index}>
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

      <div className="buttons-container">
        <button onClick={handlePrevious}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default LinearGrid;
