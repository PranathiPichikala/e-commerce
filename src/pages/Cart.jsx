import "./css/Cart.css";
import React from "react";
import { useEffect, useState } from "react";
import EmptyCart from "../components/EmptyCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { Box, Modal, Typography } from "@mui/material";
import LoginModal from "../components/LoginModal";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const [cartitems, setCartItems] = useState([]);
  const [activemenu, setActivemenu] = useState("e-cart");
  const [triggerrefresh, setTriggerRefresh] = useState(0);
  const [totaldiscount, setTotalDiscount] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);
  const [savedItems, setSavedItems] = useState([]);
  const [open, setOpen] = useState(false);

  const isloggedin = localStorage.getItem("isloggedin")
  const [opened, setOpened] = React.useState(false);
  const handleOpened = () => setOpened(true);
  const handleClosed = () => setOpened(false);

  useEffect(() => {
    const items = localStorage.getItem("cart");

    console.log(items)

    if (items) {
      const parseditems = JSON.parse(items);
      console.log({ parseditems });

      let disc = 0;
      let total = 0;

      parseditems.forEach((item) => {
        console.log({ item })
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
          if (itemcopy.count != 1) {
            itemcopy.count = itemcopy.count - 1
          }
        }

        return itemcopy
      }

      return item
    })

    localStorage.setItem("cart", JSON.stringify(updated))

    setTriggerRefresh((prev) => prev + 1)
  }

  console.log({ cartitems });
  const handleSaveForLater = (id) => {
    const savedItem = cartitems.find((item) => item.id === id);
    const updatedCartItems = cartitems.filter((item) => item.id !== id);

    setCartItems(updatedCartItems);
    setSavedItems((prevSavedItems) => [...prevSavedItems, savedItem]);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };
  const handleMoveToCart = (id) => {
    const movedItem = savedItems.find((item) => item.id === id);
    const updatedSavedItems = savedItems.filter((item) => item.id !== id);

    setSavedItems(updatedSavedItems);
    setCartItems((prevCartItems) => [...prevCartItems, movedItem]);
    localStorage.setItem("cart", JSON.stringify([...cartitems, movedItem]));
  };
  const handleRemoveFromSaved = (id) => {
    const updatedSavedItems = savedItems.filter((item) => item.id !== id);

    setSavedItems(updatedSavedItems);
    localStorage.setItem("savedItems", JSON.stringify(updatedSavedItems)); // Update saved items in local storage
  };

  const navigate = useNavigate()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="_5pko">
      <Navigation cartcount={cartitems.length} isloggedin={true} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginModal handleClose={handleClose} />
      </Modal>
      {cartitems.length ? (
        <div className="_9zeg">
          <div className="depot-cob">
            <div className="_9jqn">
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
                <div className="address-change">
                  <div className="address-change-content">
                    <div className="deliver-to">
                      <div className="_3pos">
                        <div className="_3pos-deliver">Deliver to: </div>
                        <div className="_3pos-name">
                          <span className="_3pos-name-content">Pranathi</span>
                        </div>
                        <span className="pincode-content">, 500072</span>
                        <span className="address-home">HOME</span>
                      </div>
                      <div className="adress-content">KPHB, roadno:1, Hyderabad, Hyderabad</div>
                    </div>
                    <div></div>
                  </div>
                  <div className="change-button-adress">
                    <button onClick={handleOpened}>Change</button>

                    <Modal
                      open={opened}
                      onClose={handleClosed}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style} className="_7bdq">
                        <Typography id="modal-modal-title" className="select-adress" variant="h6" component="h2">
                          Select Delivery Address
                        </Typography>
                        <div className="deliver-to-modal">
                        <input type="radio" name="address" id="address1" className="address-radio"/>
                        <div>
                          <div className="_3pos">
                          
                            <div className="_3pos-name">
                             
                                <label htmlFor="address1" className="_3pos-name-content">Pranathi</label>
                            </div>
                            <span className="pincode-content">, 500072</span>
                            <span className="address-home">HOME</span>
                          </div>
                          <div className="adress-content">KPHB, roadno:1, Hyderabad, Hyderabad</div>
                        </div>
                        </div>
                      
                        <div className="pincode-info">Use pincode to check delivery info</div>
                        <div className="_2ywt">
                        <div className="Delivery-field-side-pincode">
                              
                                <form autocomplete="off" className="_5bhq">
                                    <input  placeholder="Enter Pincode" type="number" maxlength="6" />

                                </form>
                                
                            </div>
                            <div className="check-button-pincode">
                                    <button>Submit </button></div>
                        </div>

                      </Box>
                    </Modal>
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
                            <button onClick={() => handleSaveForLater(item.id)}>SAVE FOR LATER</button>
                            <button onClick={() => handleRemove(item.id)}>REMOVE</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="placeorder-sticky">
                    <div className="placeorder-button">
                      <button onClick={() => isloggedin ? navigate("/check-out") : handleOpen()}>PLACE ORDER</button>
                    </div>
                  </div>
                </div>

              </div>
              <div className="_7oyb">
                {savedItems.length > 0 && (
                  <div className="_1shv">
                    <div className="saved-items">
                      <h3>Saved For Later</h3>
                      {savedItems.map((item, index) => {
                        return (
                          <div className="_2mhu">
                            <div key={index} className="_6mqt">
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
                                </div>
                                <div className="_6jyc">
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
                                <div className="_6nda">
                                  <button onClick={() => handleMoveToCart(item.id)}>MOVE TO CART</button>
                                  <button onClick={() => handleRemoveFromSaved(item.id)}>REMOVE</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
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
      ) : (
        <EmptyCart />
      )}



    </div>
  );
};

export default Cart;
