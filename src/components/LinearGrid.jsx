import { Button, Grid } from "@mui/material";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "./css/Mobile.css";
import { Link, useNavigate } from 'react-router-dom';


const LinearGrid = ({ header, items, setTriggerRefresh }) => {
  const itemsPerPage = 4;
  const numPages = Math.ceil(items.length / itemsPerPage);
  const [page, setPage] = useState(0)
  

  const handleNext = () => {
    setPage((prevPage) => (prevPage + 1) % numPages);
  };

  const handlePrevious = () => {
    setPage((prevPage) => (prevPage - 1 + numPages) % numPages);
  };

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleItems = items.slice(startIndex, endIndex);

  const addToCart = (e, product) => {
    e.stopPropagation()
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    product.count = product.count + 1
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setTriggerRefresh(prev => prev + 1)
  };

  const wishlistitems = JSON.parse(localStorage.getItem("wish")) || [];

  const WishList = (product) => {
    let previtems = wishlistitems
  
    if (previtems.some(item => item.id === product.id)) {
      previtems = previtems.filter(item => item.id != product.id)
    } else {
      previtems.push(product)
    }
    
    localStorage.setItem("wish", JSON.stringify(previtems));
    setTriggerRefresh(prev => prev + 1)
  };

  const navigate = useNavigate()

  console.log({visibleItems})

  return (
    <div className="linear-grid-container">
      <div className="smartphones">
        <h2>{header}</h2>
      </div>

      <Grid container rowSpacing={2} columnSpacing={5}>
        {visibleItems.map((data, index) => (
          <Grid item lg={3} key={index}>
            <div className="mobile-image" onClick={() => navigate("/product-details")}>
              <img src={data.images} alt="Mobile" />
              <div className="mobile-image-content">
                <div title="realme C53 (Champion Gold, 64 GB)" href="#">
                  {data.title}
                </div>
                <div className="rating">
                  <span>{data.rating}★</span>
                  <span>{data.stock}</span>
                </div>
                <div className="costtt">
                  <span>₹{data.price}</span>
                  <span>₹12,999</span>
                  <span>{data.discountPercentage}% off</span>
                </div>
                <div className="addtocart-buttons">
                <div className="add-to-cart">
                  <Button onClick={e => addToCart(e, data)}>ADD TO CART</Button>
                  </div>
                  <Link  className="go-to-cart" to='/cart' onClick={e => e.stopPropagation()}>
                    <Button>Go to Cart</Button>
                  </Link>
                  </div>
              </div>
              <div onClick={e => {
                e.stopPropagation()
                WishList(data)
              }} className="heart-icon">
                <AiFillHeart color={wishlistitems.some(item => item.id == data.id) ? "red" : "#c2c2c2"} />
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
