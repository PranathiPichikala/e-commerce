import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./css/Profile.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai"
import ProfileInformation from "../components/ProfileInformation";
import MyWishlist from "../components/MyWishlist";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import NavigationBottom from "../components/NavigationBottom";
import Footer from "./Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Profile = () => {

  const navigate = useNavigate("")
  const [activeContent, setActiveContent] = useState("profile");

  const isloggedin = localStorage.getItem("isloggedin")

  // const handleLinkClick = (content) => {
  //   setActiveContent(content);
  // };
  // const renderRightContent = () => {
  //   switch (activeContent) {
  //     case "wishlist":
  //       return (
  //         <div>
  //           <MyWishlist />
  //         </div>
  //       );
  //     case "profile":
  //       return (
  //         <div>
  //           <ProfileInformation />
  //         </div>
  //       );
  //     default:
  //       return null;
  //   }
  // };

  const handleLogOut = () => {
    localStorage.removeItem("isloggedin")
    navigate("/")
  }

  return (
    <div>
      <Navigation />
      <NavigationBottom />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Item>
              <div className="person">
                <div className="person-img">
                  <img
                    className="personimage-img"
                    height="50px"
                    width="50px"
                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
                  />
                  <div className="hello-flipkart">
                    <div className="hello-1">Hello,</div>
                    <div className="hello-2">Flipkart Customer</div>
                  </div>
                </div>
              </div>
            </Item>

            <Item>
              <div className="myorders">
                <div className="myorders-img">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==" />
                </div>
                <div className="myorders-link">
                  <Link to="/myorders">MY ORDERS</Link>
                </div>
                <div className="arrow-right">
                  <AiOutlineRight />
                </div>
              </div>
              <div className="my-acc">
                <div className="myaccount-setting">
                  <div className="myaccount-setting-img">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=" />
                  </div>

                  <div className="myaccount-setting-link">
                    <Link>ACCOUNT SETTINGS</Link>
                  </div>
                </div>
                <div className="profile-info">
                  <ul>
                    <li>
                      <Link to="/account/profile">Profile Information</Link>
                    </li>
                    <li>
                      <Link to="/account/manage-address">Manage Addresses</Link>
                    </li>
                    <li>
                      <Link>PAN Card Information</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="my-acc">
                <div className="myaccount-setting">
                  <div className="myaccount-setting-img">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIzIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtOSkiPjxlbGxpcHNlIGN4PSIyMC41NTciIGN5PSIyMCIgcng9IjIwLjU1NyIgcnk9IjIwIi8+PHBhdGggZD0iTTcgNmgyOHYyOEg3eiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTMxLjUgMjd2MS4xNjdhMi4zNCAyLjM0IDAgMCAxLTIuMzMzIDIuMzMzSDEyLjgzM2EyLjMzMyAyLjMzMyAwIDAgMS0yLjMzMy0yLjMzM1YxMS44MzNBMi4zMzMgMi4zMzMgMCAwIDEgMTIuODMzIDkuNWgxNi4zMzRhMi4zNCAyLjM0IDAgMCAxIDIuMzMzIDIuMzMzVjEzSDIxYTIuMzMzIDIuMzMzIDAgMCAwLTIuMzMzIDIuMzMzdjkuMzM0QTIuMzMzIDIuMzMzIDAgMCAwIDIxIDI3aDEwLjV6TTIxIDI0LjY2N2gxMS42Njd2LTkuMzM0SDIxdjkuMzM0em00LjY2Ny0yLjkxN2MtLjk3IDAtMS43NS0uNzgyLTEuNzUtMS43NXMuNzgtMS43NSAxLjc1LTEuNzVjLjk2OCAwIDEuNzUuNzgyIDEuNzUgMS43NXMtLjc4MiAxLjc1LTEuNzUgMS43NXoiLz48L2c+PC9zdmc+" />
                  </div>

                  <div className="myaccount-setting-link">
                    <Link>PAYMENTS</Link>
                  </div>
                </div>
                <div className="profile-info">
                  <ul>
                    <li>
                      <Link to="/account/add-gift-cards" >Gift Cards
                        <span className="PKhkts">₹0</span></Link>
                    </li>
                    <li>
                      <Link>Saved UPI</Link>
                    </li>
                    <li>
                      <Link>Saved Cards</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="my-acc">
                <div className="myaccount-setting">
                  <div className="myaccount-setting-img">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMyIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDIzIDE5Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMyODc0RjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIwLjUgMi43NWgtOUw5LjI1LjVIMi41QTIuMjQ3IDIuMjQ3IDAgMCAwIC4yNiAyLjc1bC0uMDEgMTMuNUEyLjI1NyAyLjI1NyAwIDAgMCAyLjUgMTguNWgxOGEyLjI1NyAyLjI1NyAwIDAgMCAyLjI1LTIuMjVWNWEyLjI1NyAyLjI1NyAwIDAgMC0yLjI1LTIuMjV6bS01LjYyNSAzLjM3NWEyLjI1NyAyLjI1NyAwIDAgMSAyLjI1IDIuMjUgMi4yNTcgMi4yNTcgMCAwIDEtMi4yNSAyLjI1IDIuMjU3IDIuMjU3IDAgMCAxLTIuMjUtMi4yNSAyLjI1NyAyLjI1NyAwIDAgMSAyLjI1LTIuMjV6bTQuNSA5aC05VjE0YzAtMS40OTYgMy4wMDQtMi4yNSA0LjUtMi4yNXM0LjUuNzU0IDQuNSAyLjI1djEuMTI1eiIvPjxwYXRoIGQ9Ik0tMi00aDI3djI3SC0yeiIvPjwvZz48L3N2Zz4=" />
                  </div>

                  <div className="myaccount-setting-link">
                    <Link> MY STUFF</Link>
                  </div>
                </div>
                <div className="profile-info">
                  <ul>
                    <li>
                      <Link to="/account/MyCoupons">My Coupons</Link>
                    </li>
                    <li>
                      <Link>My Reviews  & Ratings</Link>
                    </li>
                    <li>
                      <Link to="/account/notifications">All Notifications</Link>
                    </li>
                    <li>
                      <Link to="/account/wishlist">My Wishlist</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div onClick={handleLogOut} className="myorders">
                <div className="myorders-img">
                  <AiOutlineLogout />
                </div>
                <div className="myorders-link">
                  <span>Logout</span>
                </div>

              </div>
            </Item>
            <Item>
              <div>
                <div className="visited">Frequently Visited:</div>
                <div className="row">
                  <Link className="Track" >Track Order</Link>
                  <Link className="Help">Help Center</Link></div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
};
