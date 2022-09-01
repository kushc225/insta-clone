import React from "react";
import Navbar from "../components/Navbar";
import Status from "../components/Status";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Status />
      <Posts />
    </>
  );
};

export default Home;
