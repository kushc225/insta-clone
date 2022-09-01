import React from "react";
import "./Card.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-min-container">
          <div className="card-user-icon">
            <AccountCircleOutlinedIcon className="card-profile-icon" />
          </div>
          <div className="card-message">
            <h4>Save Your Login Info? </h4>
            <span>
              We can save your login info on this brower so you don't need to
              enter it again.
            </span>
          </div>
          <div className="card-btn">
            <button type="button" className="card-save-info-btn">
              Save Info
            </button>
            <span>Not Now</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
