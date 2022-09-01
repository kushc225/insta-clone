import React from "react";
import SubStatus from "../SubStatus";
import "./Post-header.css";
const Post = () => {
  return (
    <>
      <div className="post-icons-container">
        <SubStatus
          username={"kush"}
          type={"side"}
          imgURL={"https://wallpapercave.com/wp/wp6346895.jpg"}
        />
      </div>
    </>
  );
};

export default Post;
