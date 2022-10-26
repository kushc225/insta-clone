import { React, useEffect, useState } from "react";
import SubStatus from "./subcomponent/SubStatus";
import "./Status.css";
const Status = () => {
  const [status, setStatus] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const api = () => {
      fetch("http://localhost:5000/api/user/relatedStory", {
        method: "GET",
        headers: { "Content-Type": "application/json", token },
      })
        .then((res) => res.json())
        .then((data) => {
          setStatus(data.data[0]);
          console.log(data.data[0]);
        })
        .catch((err) => console.log(err));
    };
    api();
  }, []);
  return (
    <>
      <div className="status-container">
        <div className="status-element">
          {status.map((item, o) => (
            <SubStatus key={o} username={item.ownerName} imgURL={item.url} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Status;
