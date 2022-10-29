import { React, useEffect, useState } from "react";
import SubStatus from "./subcomponent/SubStatus";
import Del from "./subcomponent/Del";
import Del1 from "./subcomponent/Del1";
import "./Status.css";
let dj;
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
          // data.data.map((item) => {
          //   item.map((key) => {
          //     console.log(key.caption);
          //   });
          // });
          // console.log(data.data);
          dj = data;
          setStatus(dj.data);
          // console.log("status", status);
          // status.map((item) => {
          //   item.map((key) => {
          //     console.log("first");
          //   });
          // });
        })
        .catch((err) => console.log(err));
    };
    api();
  }, []);

  return (
    <>
      <div className="status-container">
        <div className="status-element">
          {status.map((person) => {
            return person.map((item, o) => {
              return (
                <SubStatus
                  key={o}
                  username={item.ownerName}
                  imgURL={item.imgURL}
                  type="ministatus"
                />
              );
            });
          })}
        </div>
      </div>
    </>
  );
};

export default Status;
