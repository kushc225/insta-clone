import React from "react";
import "./Navbar.css";
import Del from "./subcomponent/Del";
import instalogo from "../img/instalogo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import Card from "./Card";
// import Footer from "./Footer";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="second-nav">
          <div className="insta-logo">
            <img id="second-logo" src={instalogo} alt="Instagram" />
          </div>
          <div className="search-insta">
            <SearchOutlinedIcon />
            <input type="text" placeholder="search" />
          </div>
          <div className="nav-links">
            <div className="nav-icons">
              <HomeOutlinedIcon sx={{ fontSize: "1.4rem" }} />
            </div>
            <div className="nav-icons">
              <MapsUgcOutlinedIcon sx={{ fontSize: "1.4rem" }} />
            </div>
            <div className="nav-icons">
              <AddBoxOutlinedIcon sx={{ fontSize: "1.4rem" }} />
            </div>
            <div className="nav-icons">
              <ExploreOutlinedIcon sx={{ fontSize: "1.4rem" }} />
            </div>
            <div className="nav-icons">
              <FavoriteBorderOutlinedIcon sx={{ fontSize: "1.4rem" }} />
            </div>
            <div className="nav-icons">
              <AccountCircleOutlinedIcon sx={{ fontSize: "1.4rem" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <Card />
      <Footer /> */}
    </>
  );
};

export default Navbar;
