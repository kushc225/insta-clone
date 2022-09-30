import { React } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Status from "../components/Status";
import Posts from "../components/Posts";

const Home = () => {
  const videoContent = [
    {
      name: "bipinrajak",
      url: "../insta/one.mp4",
    },
    {
      name: "kushchoudhary",
      url: "../insta/two.mp4",
    },
    {
      name: "rahulkeshri",
      url: "../insta/three.mp4",
    },
    {
      name: "rahulkeshri",
      url: "../insta/three.mp4",
    },
    {
      name: "rahulkeshri",
      url: "../insta/three.mp4",
    },
  ];

  return (
    <>
      <Navbar />
      <Status />
      <div className="home-post-container">
        {videoContent.map((item, o) => (
          <Posts key={o} url={item.url} />
        ))}
      </div>
    </>
  );
};

export default Home;
