import React from "react";
import "./Posts.css";
import Footer from "./subcomponent/Posts/Footer";
import Post from "./subcomponent/Posts/Post-header";
const Posts = ({ url }) => {
  return (
    <>
      <div className="post-main-container">
        <div className="posts-container">
          <div className="posts-header-container">
            <Post />
          </div>
          <div className="post-content">
            <video width="100%" height="100%" autoPlay loop muted></video>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Posts;
