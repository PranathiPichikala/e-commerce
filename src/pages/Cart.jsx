import "./css/Cart.css";
import React from "react";
import { useEffect, useState } from "react";
import EmptyCart from "../components/EmptyCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Navigation from "../components/Navigation";

const Cart = () => {
  const [cartitems, setCartItems] = useState([]);
  const [activemenu, setActivemenu] = useState("e-cart");
  const [triggerrefresh, setTriggerRefresh] = useState(0);
  const [totaldiscount, setTotalDiscount] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);
  const [savedItems, setSavedItems] = useState([]);


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
          itemcopy.count = itemcopy.count - 1
        }

        return itemcopy
      }

      return item
    })

    localStorage.setItem("cart", JSON.stringify(updated))

    setTriggerRefresh((prev) => prev + 1)
  }

  const isloggedin = localStorage.getItem("isloggedin")

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
  return (
    <div className="_5pko">
      <Navigation cartcount={cartitems.length} isloggedin={isloggedin} />
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
