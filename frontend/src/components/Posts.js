import React from "react";
import "./Posts.css";
import Footer from "./subcomponent/Posts/Footer";
import Post from "./subcomponent/Posts/Post-header";
const Posts = () => {
  return (
    <>
      <div className="posts-container">
        <div className="posts-header-container">
          <Post />
        </div>
        <div className="post-content">content</div>
        <Footer />
      </div>
    </>
  );
};

export default Posts;
