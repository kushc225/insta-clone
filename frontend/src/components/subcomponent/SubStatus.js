import React, { useState } from "react";
import "./SubStatus.css";

const SubStatus = ({ imgURL, username, type }) => {
  const [trippledot, setTrippledot] = useState(false);
  const trippledotHanderl = () => {
    if (trippledot === false) {
      setTrippledot(true);
      return;
    }
    setTrippledot(false);
  };
  imgURL =
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80";

  return (
    <>
      {type === "side" ? (
        <div className="single-pro-status">
          <div className="insta-pic-holder">
            <img className="instaProfilePic" src={imgURL} alt="loading" />
          </div>
          <div className="status-side-username">
            <span className="sub-side-username mx-2">{username}</span>
          </div>
          <span onClick={trippledotHanderl} className="tripple-dot">
            ...
          </span>
        </div>
      ) : (
        <div className="single-status">
          <div className="insta-pic-holder">
            <img className="instaProfilePic" src={imgURL} alt="loading" />
          </div>
          <div className="status-side-username">
            <span className="sub-side-username">{username}</span>
          </div>
        </div>
      )}
      {/* {trippledot && (
        <div className="post-modal-container">
          <div className="post-element col-red">Report</div>
          <div className="post-element col-red">Unfollow</div>
          <div className="post-element">Add to favorite</div>
          <div className="post-element">Go to post</div>
          <div className="post-element">Share to...</div>
          <div className="post-element">Copy Link</div>
          <div className="post-element">Embed</div>
          <div className="post-element b-none">Cancel</div>
        </div>
      )} */}
    </>
  );
};

export default SubStatus;
