import React from "react";
import SubStatus from "./subcomponent/SubStatus";
import "./Status.css";
const Status = () => {
  const content = [
    {
      name: "bipinrajak",
      url: "https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg",
    },
    {
      name: "kushchoudhary",
      url: "https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "rahulkeshri",
      url: "https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon-by-vexels.png",
    },
    {
      name: "sohandas",
      url: "https://wallpapercave.com/wp/wp6346895.jpg",
    },
    {
      name: "sohanraju",
      url: "https://images.vexels.com/media/users/3/147102/isolated/preview/082213cb0f9eabb7e6715f59ef7d322a-instagram-profile-icon-by-vexels.png",
    },
    {
      name: "loop whole",
      url: "https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg",
    },
    {
      name: "youtube",
      url: "https://wallpapercave.com/wp/wp6346895.jpg",
    },
    {
      name: "umrdf youtubr",
      url: "https://wallpapercave.com/wp/wp6346895.jpg",
    },
    {
      name: "bipi nrajak",
      url: "https://wallpapercave.com/wp/wp6346895.jpg",
    },
    {
      name: "vishan raj",
      url: "https://wallpapercave.com/wp/wp6346895.jpg",
    },
    {
      name: "google baba",
      url: "https://wallpapercave.com/wp/wp6346895.jpg",
    },
  ];
  return (
    <>
      <div className="status-container">
        <div className="status-element">
          {content.map((item, o) => (
            <SubStatus key={o} username={item.name} imgURL={item.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Status;
