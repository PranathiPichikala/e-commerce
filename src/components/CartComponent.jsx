import React from "react";

const CartComponent = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <ul>
        {cartItems.map((item, index) => (
           <div className="mobile-image">
                <img src={item.images} alt="Mobile" />
                <div className="mobile-image-content">
                  <div title="realme C53 (Champion Gold, 64 GB)" href="#">
                    {item.title}
                  </div>
                  <div className="rating">
                    <span>{item.rating}★</span>
                    <span>{item.stock}</span>
                  </div>
                  <div className="costtt">
                    <span>₹{item.price}</span>
                    <span>₹12,999</span>
                    <span>{item.discountPercentage}% off</span>
                  </div>
                </div>
              </div>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
