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

const Navigation = ({ cartcount, isloggedin }) => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [accountspopover, setAccountsPopover] = useState(false)

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
    return (
        <div className="_9epm">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <LoginPage />
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
                            {search ? undefined : (
                                <label>Search for products, brands and more</label>
                            )}
                            <input value={search} onChange={(e) => setSearch(e.target.value)} />
                            <BiSearch />
                        </div>
                    </div>
                    <div className="center">
                        {isloggedin ? (
                            <div
                                className="monks-abs"
                                onMouseEnter={() => setAccountsPopover(true)}
                                onMouseLeave={() => setAccountsPopover(false)}
                            >
                                <span>Account</span>
                                <BiChevronDown />
                                {accountspopover ? (
                                    <div
                                        className="popover"
                                        onMouseEnter={() => setAccountsPopover(true)}
                                        onMouseLeave={() => setAccountsPopover(false)}
                                    >
                                        <div className="transparent"></div>
                                        <div className="container">
                                            <ul>
                                                <li>
                                                    <Link to="/account/profile">
                                                        <CgProfile />
                                                        <span>My profile</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/account/wishlist">
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
                                                <li>
                                                    <Link to="/" >
                                                        <LogoutIcon />
                                                        <span onClick={handleLogOut}>Log Out</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                ) : undefined}
                            </div>
                        ) : <button onClick={handleOpen}>Login</button>}
                        <span style={{ fontWeight: "600", color: "white", cursor: "pointer" }}>Become a seller</span>
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
