import Modal from "@mui/material/Modal";
import LoginPage from "../pages/LoginPage";
import { BiChevronDown, BiSearch, BiSolidWalletAlt } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { useState } from "react";
import "./css/Navigation.css"
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Logo from "../assets/Logo.jpg"
import LogoutIcon from '@mui/icons-material/Logout';
import { GoHistory } from "react-icons/go"
import SearchComponent from "./SearchComponent";
import LoginModal from "./LoginModal";

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [accountspopover, setAccountsPopover] = useState(false)
    const [searchHistory, setSearchHistory] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const isloggedin = localStorage.getItem("isloggedin")
    const cartcount = localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart")).length

    const navigate = useNavigate()

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogOut = () => {
        localStorage.removeItem("isloggedin")
        window.location.reload()
    }
    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        setSearch(value);

        if (value !== '') {
            setSearchHistory((prevHistory) => [...prevHistory.filter(item => item !== value), value]);
        }
    };

    const handleDropdownItemClick = (item) => {
        setSearch(item);
        setShowDropdown(false);
        setSearchHistory([]);
        navigate("/filtercomponent")
    };

    return (
        <div className="_9epm">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <LoginModal handleClose={handleClose} />
            </Modal>
            <div className="header">
                <div className="rebond-doe">
                    <div className="center">
                        <div className="unsung-cow" onClick={() => navigate("/")}>
                            <div className="logo-container">
                                <img src={Logo} alt="" />
                            </div>
                            <span>Logo</span>
                        </div>
                        <div className="search">
                            <div className={`search-input${showDropdown ? ' focused' : ''}`}>
                                {search ? undefined : (
                                    <label>Search for products, brands and more</label>
                                )}
                                <input
                                    value={search}
                                    onChange={handleInputChange}
                                    onFocus={() => setShowDropdown(true)}
                                    onBlur={() => setShowDropdown(false)}
                                />
                                <div className="_2ons">
                                    <BiSearch />
                                </div>
                            </div>
                            {showDropdown && (
                                <div className="search-history-dropdown">
                                    {searchHistory.map((item, index) => (
                                        <div
                                            key={index}
                                            className="dropdown-item"
                                            onClick={() => handleDropdownItemClick(item)}
                                            onMouseDown={(e) => e.preventDefault()}
                                        >
                                            <GoHistory /> <div className="_6edy">{item}</div>
                                        </div>
                                    ))}
                                    <div className="_4jlj">
                                        <p className="_6pnm">Discover more</p>
                                        <SearchComponent />
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="center">
                            <div
                                className="monks-abs"
                                onMouseEnter={() => setAccountsPopover(true)}
                                onMouseLeave={() => setAccountsPopover(false)}
                            >
                                {isloggedin ? (
                                    <>
                                        <span>Account</span>
                                        <BiChevronDown />
                                    </>
                                ) : <button onClick={() => handleOpen()}>Login</button>}
                                
                                {accountspopover ? (
                                    <div
                                        className="popover"
                                        onMouseEnter={() => setAccountsPopover(true)}
                                        onMouseLeave={() => setAccountsPopover(false)}
                                    >
                                        <div className="transparent" onClick={() => isloggedin ? undefined : handleOpen()}></div>
                                        <div className="container">
                                            <ul>
                                                {isloggedin ? undefined : <li>
                                                    <div style={{ color: "grey", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <span style={{ fontSize: "14px", fontWeight: "400" }}>New customer?</span>
                                                        <span style={{ fontSize: "14px", color: "blue", cursor: "pointer" }} onClick={() => navigate("/login", { state: { signupopen: true }})}>Sign up</span>
                                                    </div>
                                                </li>}
                                                <li>
                                                    <Link to={isloggedin ? "/account/profile" : "/login"}>
                                                        <CgProfile />
                                                        <span>My profile</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={isloggedin ? "/account/wishlist" : "/login"}>
                                                        <AiFillHeart />
                                                        <span>Wishlist</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/giftcards">
                                                        <BiSolidWalletAlt />
                                                        <span>Gift Cards</span>
                                                    </Link>
                                                </li>
                                                {isloggedin ? <li>
                                                    <Link to="/" >
                                                        <LogoutIcon />
                                                        <span onClick={handleLogOut}>Log Out</span>
                                                    </Link>
                                                </li> : undefined}
                                            </ul>
                                        </div>
                                    </div>
                                ) : undefined}
                            </div>
                            <Link to="/become-seller">
                        <span style={{ fontWeight: "600", color: "white", cursor: "pointer" }}>Become a seller</span>
                        </Link>
                        <div className="dribbed-yum" onClick={() => navigate("/cart")}>
                            <div className="cart-icon">
                                <BsFillCartFill />
                                {cartcount ? <span>{cartcount}</span> : undefined}
                            </div>
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation
