import "./css/Cart.css";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import EmptyCart from "../components/EmptyCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import LoginPage from "../pages/LoginPage";

const Cart = () => {
  const [search, setSearch] = useState("");
  const [cartitems, setCartItems] = useState([]);
  const [activemenu, setActivemenu] = useState("e-cart");
  const [triggerrefresh, setTriggerRefresh] = useState(0);
  const [totaldiscount, setTotalDiscount] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);

  useEffect(() => {
    const items = localStorage.getItem("cart");
    if (items) {
      const parseditems = JSON.parse(items);

      let disc = 0;
      let total = 0;

      parseditems.forEach((item) => {
        disc += item.price * item.discountPercentage * 0.01;
        total += item.price;
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

  console.log({ cartitems });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="_5pko">
      <div className="header">
        <div className="search">
          {search ? undefined : (
            <label>Search for products, brands and more</label>
          )}
          <input value={search} onChange={(e) => setSearch(e.target.value)} />
          <BiSearch />
        </div>
        <button onClick={handleOpen}>Login</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <LoginPage />
        </Modal>
      </div>
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
                          <button>
                            <AiOutlineMinus />
                          </button>
                          <input value={1} />
                          <button>
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
