import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import "./Footer.css";
const Footer = () => {
  const [comment, setComment] = useState("");
  return (
    <>
      <div className="footer-container">
        <div className="insta-events">
          <div className="mx-2 c-pointer">
            <FavoriteBorderOutlinedIcon />
          </div>
          <div className="mx-2 c-pointer">
            <MapsUgcOutlinedIcon />
          </div>
          <div className="mx-2 c-pointer">
            <SendOutlinedIcon />
          </div>
          <div className="share c-pointer">
            <BookmarkBorderOutlinedIcon />
          </div>
        </div>
        <div className="likes c-pointer">
          <span>45,455</span>
        </div>
        <div className="auther-caption mx-2">
          <span>adultsociety</span> Or bhai swad aa gya...
        </div>
        <div className="user-comments mx-2 c-pointer">
          <span>view all 453 comments</span>
        </div>
        <div className="time-ago mx-2">
          <span>2 HOURS ago</span> <span>see translation</span>
        </div>
        <div className="my-comment mx-2 c-pointer ">
          <SentimentSatisfiedOutlinedIcon />
          <input
            onChange={(e) => setComment(e.target.value)}
            type="text"
            name="comment"
            id="comment"
            placeholder="Your comment"
          />

          <div className="post-btn c-pointer">
            <button>Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
