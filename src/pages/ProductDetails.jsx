import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import NavigationBottom from "../components/NavigationBottom";
import SimilarProducts from "../components/SimiliarProducts";
import "./css/ProductDetails.css";
import { AiFillHeart } from "react-icons/ai";
import Footer from "./Footer";
import { MdLocationOn } from "react-icons/md"
import { HiOutlineSearch } from "react-icons/hi"
import { ImUser } from "react-icons/im"
import { BiLike } from "react-icons/bi"
import { BiDislike } from "react-icons/bi"
import { RiArrowDropDownLine } from "react-icons/ri"
import RatingsAndReviews from "../components/RatingsAndReviews";
const electronicProduct = {
    Color: [
        {
            component: "image",
            src: "https://rukminim2.flixcart.com/image/144/144/xif0q/mobile/c/s/x/-original-imagzjhwaaewgj8r.jpeg?q=50",
        },
        {
            component: "image",
            src: "https://rukminim2.flixcart.com/image/144/144/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=50",
        },
        {
            component: "image",
            src: "https://rukminim2.flixcart.com/image/144/144/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=50",
        },
    ],

    RAM: [
        {
            component: "smallbox",
            text: "4 GB",
        },
        {
            component: "smallbox",
            text: "6 GB",
        },
        {
            component: "smallbox",
            text: "8 GB",
        },
    ],

    "Product description": [
        {
            component: "bigbox",
            title: "Powerful Performance",
            image:
                "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/831ddbe1dc214689bfa8614c8da135bf_187698f1eec_T2X-v1-1.jpg.jpeg?q=90",
            description:
                "You can experience outstanding performance with the Vivo T2x 5G thanks to its 7 nm 5G processor, the octa-core Dimensity 6020, with a maximum clock speed of 2.2 GHz. Furthermore, 5G makes it easy to share media and download files quickly owing to its high capacity and minimal jitter. You are entitled to seamless performance and enhanced visuals in online games and films.",
        },

        {
            component: "bigbox",
            title: "Powerful Performance",
            image:
                "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/831ddbe1dc214689bfa8614c8da135bf_187698f1eec_T2X-v1-1.jpg.jpeg?q=90",
            description:
                "You can experience outstanding performance with the Vivo T2x 5G thanks to its 7 nm 5G processor, the octa-core Dimensity 6020, with a maximum clock speed of 2.2 GHz. Furthermore, 5G makes it easy to share media and download files quickly owing to its high capacity and minimal jitter. You are entitled to seamless performance and enhanced visuals in online games and films.",
        },
        {
            component: "bigbox",
            title: "Powerful Performance",
            image:
                "https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/831ddbe1dc214689bfa8614c8da135bf_187698f1eec_T2X-v1-1.jpg.jpeg?q=90",
            description:
                "You can experience outstanding performance with the Vivo T2x 5G thanks to its 7 nm 5G processor, the octa-core Dimensity 6020, with a maximum clock speed of 2.2 GHz. Furthermore, 5G makes it easy to share media and download files quickly owing to its high capacity and minimal jitter. You are entitled to seamless performance and enhanced visuals in online games and films.",
        },
    ],
};

const giftItem = {
    Denomination: [
        {
            component: "smallbox",
            text: "100",
        },
        {
            component: "smallbox",
            text: "200",
        },
        {
            component: "smallbox",
            text: "400",
        },
        {
            component: "smallbox",
            text: "500",
        },
        {
            component: "smallbox",
            text: "1000",
        },
    ],
};

const ImageBox = ({ src, onClick, onMouseEnter }) => {
    return (
        <div className="_3isz" onMouseEnter={onMouseEnter} onClick={onClick}>
            <img src={src} alt="" />
        </div>
    );
};
const Smallbox = ({ text }) => {
    return <div className="_4qhw">{text}</div>;
};

// index is used to flip direction of image i.e. right to left
const Bigbox = ({ index, header, paragraph, image }) => {
    return (
        <div
            className={index % 2 === 1 ? "frees-cam nocturne-tag" : "nocturne-tag"}
        >
            <div>
                <h3>{header}</h3>
                <p>{paragraph}</p>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export const ProductDetails = () => {
    const [showAllOffers, setShowAllOffers] = useState(false);
    const [productData, setProductData] = useState(undefined);
    const [renderkeys, setRenderkeys] = useState([]);
    const [triggerRefresh, setTriggerRefresh] = useState(0);

    const { type } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        let prods = electronicProduct;

        console.log({ type });

        if (type === "gift") {
            prods = giftItem;
        }

        setProductData(prods);

        if (prods) {
            setRenderkeys(Object.keys(prods));
        }
    }, [type]);

    const toggleOffers = () => {
        setShowAllOffers(!showAllOffers);
    };
    const [hoveredImgSrc, setHoveredImgSrc] = useState(null);

    const handleImageHover = (src) => {
        setHoveredImgSrc(src);
    };
    const [selectedColor, setSelectedColor] = useState(
        electronicProduct.Color[0].src
    );

    const handleColorHover = (src) => {
        setSelectedColor(src);
    };

    const handleColorClick = (src) => {
        setSelectedColor(src);
    };

    const addToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        product.count = product.count + 1;
        cartItems.push(product);
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setTriggerRefresh((prev) => prev + 1);
    };

    const data = {
        id: 1,
        title: "realme C53",
        description:
            "The Realme  is a powerful device that will give you the best experience when using it.",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Realme",
        images:
            "https://images.jdmagicbox.com/quickquotes/images_main/realme-gt-2-pro-steel-black-8gb-128gb-2188142229-4q0jqnpo.jpg",
        count: 0,
    };

    return (
        <div>
            <Navigation />
            <NavigationBottom />
            <div className="_7oqi">
                <div className="_8dlm">
                    <div className="_6rkq">
                        {selectedColor && (
                            <>
                                <div className="_hovered-img">
                                    <img src={selectedColor} alt="Selected" />
                                    <button className="btn1" onClick={() => addToCart(data)}>
                                        ADD TO CART
                                    </button>
                                    <button className="btn2" onClick={() => navigate("/cart")}>
                                        BUY NOW
                                    </button>
                                </div>
                            </>
                        )}
                        <div className="heart">
                            <AiFillHeart />
                        </div>
                    </div>
                </div>
                <div className="_0otr">
                    <p>vivo T2x 5G (Glimmer Black, 128 GB) (4 GB RAM)</p>
                    <div className="_6ucv">
                        <div className="_1nsd"> 4.5★</div>
                        <div className="_1wop"> 239 Ratings & 17 Reviews</div>
                    </div>
                    <div className="_3zmm">Extra ₹3811 off</div>
                    <div className="_0nzc">
                        <div className="_0ihh">₹45,989</div>
                        <div className="_0ilx">₹49,999</div>
                        <div className="_9phl">8% off</div>
                    </div>
                    <div className="_5onx">
                        <li>+ ₹99 Secured Packaging Fee</li>
                    </div>
                    <div className="_2evw">
                        <div className="_7sfp"> Available offers</div>
                        <div className="_6ucv">
                            <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                            <li>Eligible for Flipkart Pay Later</li>
                        </div>
                        <div className="_6ucv">
                            <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                            <li>
                                <span>Bank Offer</span>
                                Flat ₹1,000 off on HDFC Bank Credit Card EMI Trxns on orders
                                priced between ₹15,000 to ₹49,999
                            </li>
                        </div>
                        <div className="_6ucv">
                            <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                            <li>
                                <span>Bank Offer</span>
                                Flat ₹3,000 off on HDFC Bank Credit Card EMI Trxns on orders
                                priced ₹50,000 and above
                            </li>
                        </div>
                        {showAllOffers && (
                            <div className="_6ucv">
                                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                                <li>
                                    <span>Bank Offer</span>
                                    Flat ₹1,000 off on HDFC Bank Debit Card EMI Trxns on orders
                                    priced between ₹15,000 to ₹49,999
                                </li>
                            </div>
                        )}
                        <button className="_5dlv" onClick={toggleOffers}>
                            {showAllOffers ? "View Less" : "View More Offers"}
                        </button>
                    </div>
                    <div className="_5pwk" >
                        <div className="Delivery-field">
                            <div className="delivery-field-content">
                                Delivery
                            </div>
                            <div className="Delivery-field-side">
                                <MdLocationOn />
                                <form autocomplete="off" className="_5bhq">
                                    <input placeholder="Enter Delivery Pincode" type="text" maxlength="6" />

                                </form>
                                <div className="check-button-delivery">
                                    <button>Check   </button></div>
                            </div>
                        </div>
                        <div className="_9yoc">
                            <div className="_9yoc-delivery">
                                <div className="_9yoc-delivery-delivery">
                                    <div className="delivery-by-tom">
                                        <p>Delivery by Tomorrow, Thursday</p>
                                    </div>
                                    <div className="free-40">
                                        <span>|</span>
                                        <span>Free</span>
                                        <span>₹40</span>
                                    </div>
                                </div>
                                <div className="ordered-before">
                                    <p> if ordered before 1:35 PM</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="_5tht">
                        <div className="_1evn">
                            {renderkeys.map((item) => {
                                if (item === "Color") {
                                    const prod = productData[item];
                                    const imageComponents = prod.map((iamtired) => {
                                        if (iamtired.component === "image") {
                                            return (
                                                <div key={iamtired.src}>
                                                    <ImageBox
                                                        src={iamtired.src}
                                                        onMouseEnter={() =>
                                                            handleColorHover(iamtired.src)
                                                        }
                                                        onClick={() => handleColorClick(iamtired.src)}
                                                    />
                                                </div>
                                            );
                                        }

                                        return null;
                                    });

                                    return (
                                        <div className="_2qvz" key={item}>
                                            <div className="_0esa">{item}</div>
                                            <div className="_3xam">{imageComponents}</div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                        <div className="_1evn">
                            {renderkeys.map((item) => {
                                if (item === "RAM") {
                                    const ramOptions = productData[item];
                                    const ramTextComponents = ramOptions.map((ramOption) => (
                                        <div key={ramOption.text}>
                                            <Smallbox text={ramOption.text} />
                                        </div>
                                    ));

                                    return (
                                        <div className="_2qvz" key={item}>
                                            <div className="_0esa">{item}</div>
                                            <div className="_3xam">{ramTextComponents}</div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>
                    <div className="_1wrq">
                        <div>Highlights</div>
                        <div className="_1xyh">
                            <li>4 GB RAM | 128 GB ROM</li>
                            <li>16.71 cm (6.58 inch) Full HD+ Display</li>
                            <li>50MP + 2MP | 8MP Front Camera</li>
                            <li>5000 mAh Battery</li>
                            <li>Dimensity 6020 Processor</li>
                        </div>
                        <div className="_2fsd"> Easy Payment Options</div>
                        <div className="_1xyh">
                            <li>Flipkart Pay Later</li>
                            <li>EMI starting from ₹1,572/month</li>
                            <li>Net banking & Credit/ Debit/ ATM card</li>
                        </div>
                    </div>
                    <div className="_6xab">
                        <div className="_3eqk">Description</div>
                        <div className="_3ytp">
                            <p>
                                With the superb Vivo T2x 5G, you can take advantage of great
                                pictures and a flawless user experience. With the Vivo T2x 5G,
                                you can experience exceptional performance owing to its 7 nm
                                5G CPU, the octa-core Dimensity 6020, with a top clock speed
                                of 2.2 GHz. Additionally, the 50 MP main camera on this
                                smartphone beautifully catches every detail you see.
                                Additionally, Super Night Selfie employs noise cancellation
                                technology in conjunction with an Aura Screen Light to produce
                                a calming light that is effective in low light. The pioneering
                                Extended RAM 3.0 technology also uses ROM to expand RAM with a
                                maximum capacity of 8 GB. This enables smooth app switching
                                and allows up to 27 active applications to run in the
                                background.
                            </p>
                        </div>
                    </div>
                    <div className="_4lay">
                        <div className="_2syx">Product Description</div>
                        <div className="container">
                            {renderkeys.map((item) => {
                                const prod = productData[item];
                                return prod.map((product, index) => {
                                    if (product.component === "bigbox") {
                                        return (
                                            <Bigbox
                                                index={index}
                                                header={product.title}
                                                paragraph={product.description}
                                                image={product.image}
                                            />
                                        );
                                    }
                                });
                            })}
                        </div>
                    </div>
                    <div className="_9fqp">
                        <RatingsAndReviews />
                    </div>
                    <div className="_5bzr">
                        <div className="questions-answers">
                            <div className="_2rdj">Questions and Answers</div>

                            <div><HiOutlineSearch /></div>
                        </div>


                        <div className="options-q">
                            <span className="options-question">Q:</span>
                            <span>Reno10 5G comes in how many colour options?</span>

                            <div className="answers-a">
                                <span >A:</span>
                                <span>It is available in two premium colors - Ice Blue and Silvery Grey</span>
                            </div>
                            <div className="_3fkx">
                                <div className="xonight">
                                    <div className="xonight-ecom">XONIGHT E-Commerce</div>
                                    <div className="Flipkart-Seller">
                                        <ImUser /> Flipkart Seller
                                    </div>
                                </div>

                                <div className="likes-dislike">
                                    <div className="like">
                                        <BiLike /> 683</div>
                                    <div className="dislike"> <BiDislike />292</div>
                                    <div className="riarrowdrop"><RiArrowDropDownLine /></div>

                                </div>
                            </div>


                        </div>
                        <div className="options-q">
                            <span className="options-question">Q:</span>
                            <span>Reno10 5G comes in how many colour options?</span>

                            <div className="answers-a">
                                <span >A:</span>
                                <span>It is available in two premium colors - Ice Blue and Silvery Grey</span>
                            </div>
                            <div className="_3fkx">
                                <div className="xonight">
                                    <div className="xonight-ecom">XONIGHT E-Commerce</div>
                                    <div className="Flipkart-Seller">
                                        <ImUser /> Flipkart Seller
                                    </div>
                                </div>

                                <div className="likes-dislike">
                                    <div className="like">
                                        <BiLike /> 683</div>
                                    <div className="dislike"> <BiDislike />292</div>
                                    <div className="riarrowdrop"><RiArrowDropDownLine /></div>

                                </div>
                            </div>


                        </div>
                        <div className="options-q">
                            <span className="options-question">Q:</span>
                            <span>Reno10 5G comes in how many colour options?</span>

                            <div className="answers-a">
                                <span >A:</span>
                                <span>It is available in two premium colors - Ice Blue and Silvery Grey</span>
                            </div>
                            <div className="_3fkx">
                                <div className="xonight">
                                    <div className="xonight-ecom">XONIGHT E-Commerce</div>
                                    <div className="Flipkart-Seller">
                                        <ImUser /> Flipkart Seller
                                    </div>
                                </div>

                                <div className="likes-dislike">
                                    <div className="like">
                                        <BiLike /> 683</div>
                                    <div className="dislike"> <BiDislike />292</div>
                                    <div className="riarrowdrop"><RiArrowDropDownLine /></div>

                                </div>
                            </div>
                        </div>
                        {showAllOffers && (
                            <div className="options-q">
                                <span className="options-question">Q:</span>
                                <span>Reno10 5G comes in how many colour options?</span>

                                <div className="answers-a">
                                    <span >A:</span>
                                    <span>It is available in two premium colors - Ice Blue and Silvery Grey</span>
                                </div>
                                <div className="_3fkx">
                                    <div className="xonight">
                                        <div className="xonight-ecom">XONIGHT E-Commerce</div>
                                        <div className="Flipkart-Seller">
                                            <ImUser /> Flipkart Seller
                                        </div>
                                    </div>

                                    <div className="likes-dislike">
                                        <div className="like">
                                            <BiLike /> 683</div>
                                        <div className="dislike"> <BiDislike />292</div>
                                        <div className="riarrowdrop"><RiArrowDropDownLine /></div>

                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="_0qof">
                            <button onClick={toggleOffers}>
                                {showAllOffers ? "View Less" : "All Questions"}
                            </button>
                        </div>


                    </div>


                </div>
            </div>

            <div className="_6atp">
                <div className="smartphones-similiar">
                    <h2>Similar Products</h2>
                </div>
                <div className="viewall-similiar">
                    <button>VIEW ALL</button>
                </div>
            </div>
            <div className="_ayyababoi">
                <SimilarProducts />
            </div>
            <div className="_6atp">
                <div className="smartphones-similiar">
                    <h2>Recently viewed</h2>
                </div>
                <div className="viewall-similiar">
                    <button>VIEW ALL</button>
                </div>
            </div>
            <SimilarProducts />
            <Footer />
        </div>
    );
};
