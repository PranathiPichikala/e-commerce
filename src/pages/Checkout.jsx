import React from 'react';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { FaTruck, FaBell } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import "./css/Checkout.css";
import "./css/Cart.css"
import ManageAddressPage from './ManageAddressPage';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Navigation from "../components/Navigation";
import NavigationBottom from "../components/NavigationBottom";
export default function Checkout() {
  const [activeRow, setActiveRow] = useState(0);
  const [activemenu, setActivemenu] = useState("e-cart");
  const [triggerrefresh, setTriggerRefresh] = useState(0);
  const [totaldiscount, setTotalDiscount] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);

  const handleNext = () => {
    setActiveRow((prevActiveRow) => prevActiveRow + 1);
  };

  const handleReset = () => {
    setActiveRow(0);
  };
  const [cartitems, setCartItems] = useState([]);
  useEffect(() => {
    const items = localStorage.getItem("cart");

    console.log(items)

    if (items) {
      const parseditems = JSON.parse(items);

      let disc = 0;
      let total = 0;

      parseditems.forEach((item) => {
        disc += item.price * item.count * item.discountPercentage * 0.01;
        total += item.price * item.count;
      });

      setTotalDiscount(disc.toFixed(2));
      setTotalAmount(total.toFixed(2));
      setCartItems(parseditems);
    }
  }, [triggerrefresh]);
  const handleRemove = (id) => {
    const removedlist = cartitems.filter((item) => item.id !== id);

    localStorage.setItem("cart", JSON.stringify(removedlist));

    setTriggerRefresh((prev) => prev + 1);
  };

  const handleUpdateCount = (id, action) => {
    const updated = cartitems.map(item => {
      if (item.id === id) {
        const itemcopy = JSON.parse(JSON.stringify(item))

        if (action === "increase") {
          itemcopy.count = itemcopy.count + 1
        } else {
          itemcopy.count = itemcopy.count - 1
        }

        return itemcopy
      }

      return item
    })

    localStorage.setItem("cart", JSON.stringify(updated))

    setTriggerRefresh((prev) => prev + 1)
  }
  console.log({ cartitems });





  return (
    <div>
      <Navigation />
      <NavigationBottom />
      <div className="_4xzp">
        <Box className="_6ggb">
          {[
            {
              title: 'LOGIN',
              content: (
                <div className="_6uoh">
                  <div className="_5btx">
                    <div className="_4dqh">
                      <div className="_5mxq">Phone</div>
                      <div className="_0nur">+9234567890</div>
                    </div>
                    <div className="_9ikx">
                      <Link>Logout & Sign in to another account</Link>
                    </div>
                    <div>
                      {activeRow === 0 && (
                        <Button
                          className="_7zvr"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Continue Checkout
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="_7bbm">
                    <div>Advantages of our secure login</div>
                    <ul className="_6ipc">
                      <li><FaTruck /> Easily Track Orders, Hassle free Returns</li>
                      <li><FaBell /> Get Relevant Alerts and Recommendation</li>
                      <li><AiFillStar /> Wishlist, Reviews, Ratings and more.</li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: 'DELIVERY ADDRESS',
              content: (
                <div className="_6jfe">
                  <ManageAddressPage />
                  {activeRow === 1 && (
                    <Button
                      className="_1gnc"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      SAVE AND DELIVER HERE
                    </Button>
                  )}
                </div>

              ),
            },

            {
              title: 'ORDER SUMMARY',
              content: (
                <div>

                  {cartitems.length ? (
                    <div className="_9zeg">
                      <div className="depot-cob">
                        <div className="container">
                          <div className="navigate">
                            <div
                              onClick={() => setActivemenu("e-cart")}
                              className={activemenu === "e-cart" ? "active" : undefined}
                            >
                              e-cart
                            </div>
                            <div
                              onClick={() => setActivemenu("grocery")}
                              className={activemenu === "grocery" ? "active" : undefined}
                            >
                              Grocery
                            </div>
                          </div>
                          <div className="ostrich-ewe">
                            {cartitems.map((item, index) => {
                              return (
                                <div key={index} className="item">
                                  <span className="specter-doer">
                                    Delivery by Tue Aug 15
                                  </span>
                                  <div className="talmud-outs">
                                    <div>
                                      <img src={item.images} alt="" />
                                    </div>
                                    <div className="exonyms-dot">
                                      <button onClick={() => handleUpdateCount(item.id, "decrease")}>
                                        <AiOutlineMinus />
                                      </button>
                                      <input value={item.count} />
                                      <button onClick={() => handleUpdateCount(item.id, "increase")}>
                                        <AiOutlinePlus />
                                      </button>
                                    </div>
                                  </div>
                                  <div className="foulards-ids">
                                    <div>{item.title}</div>
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        color: "grey",
                                        fontSize: "14px",
                                      }}
                                    >
                                      <span>8 GB RAM</span>
                                      <span
                                        style={{
                                          display: "inline-block",
                                          marginTop: "5px",
                                        }}
                                      >
                                        Seller: Retail Net
                                      </span>
                                    </div>
                                    <div className="price-discount">
                                      <span
                                        style={{
                                          fontSize: "14px",
                                          color: "grey",
                                          textDecoration: "line-through",
                                          alignSelf: "end",
                                        }}
                                      >
                                        ₹ {item.price}
                                      </span>
                                      <span
                                        style={{
                                          fontWeight: "600",
                                          color: "rgb(27, 27, 27)",
                                        }}
                                      >
                                        ₹{" "}
                                        {(
                                          item.price -
                                          item.price * item.discountPercentage * 0.01
                                        ).toFixed(2)}
                                      </span>
                                      <span
                                        style={{
                                          fontSize: "14px",
                                          color: "green",
                                          fontWeight: "600",
                                        }}
                                      >
                                        {item.discountPercentage} % Off
                                      </span>
                                    </div>
                                    <div className="controllers">
                                      <button>SAVE FOR LATER</button>
                                      <button onClick={() => handleRemove(item.id)}>
                                        REMOVE
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </div>
                  ) : null}
                  {activeRow === 2 && (
                    <Button
                      className="_1gnc"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue for PAYMENT
                    </Button>
                  )}

                </div>

              ),
            },
            {
              title: 'PAYMENT OPTIONS',
              content: (
                <Button className="_1gnc">Continue to Pay</Button>
              ),
            },


          ].map((row, index) => (
            <Paper key={row.title} className="_8hxp" elevation={3}>
              <div className="_7pzq">
              <Typography className="_1kxb" variant="h6">
                <span>{index + 1}</span>
                {row.title} </Typography>
                <Button  className="_6bus"onClick={() => setActiveRow(index)}>
                  Change
                </Button>
                </div>
              {activeRow === index && (
                <div>
                  <Typography>{row.content}</Typography>
                  <div className="_7hoy">
                    <span>
                      Please note that upon clicking "Logout" you will lose all items in cart and will be redirected to Flipkart home page.
                    </span>
                  </div>
                </div>
              )}
            </Paper>
          ))}
        </Box>




        <div style={{ width: '300px', marginLeft: '20px' }}>
          <div className='_9zeg' style={{
            marginTop: "60px",
            boxShadow: "0 1px 1px 0 rgba(0,0,.2,.2)",
          }}>

            <div className="price">
              <div
                style={{
                  color: "grey",
                  padding: "15px 20px",
                  fontWeight: "600",
                  borderBottom: "1px solid rgb(228, 228, 228)",
                }}
              >
                PRICE DETAILS
              </div>
              <div className="cutesy-kyak">
                <div>
                  <span>Price ({cartitems.length} items)</span>
                  <span>₹{totalamount}</span>
                </div>
                <div>
                  <span>Discount</span>
                  <span style={{ color: "green" }}>- ₹{totaldiscount}</span>
                </div>
                <div>
                  <span>Delivery Charges</span>
                  <span style={{ color: "green" }}>Free</span>
                </div>
                <div>
                  <span>Secured Packaging Fee</span>
                  <span>₹59</span>
                </div>
                <div className="handbag-kats">
                  <span>Total Amount</span>
                  <span>₹{totalamount - totaldiscount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
