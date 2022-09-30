import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import appstore from "../img/appstore.png";
import playstore from "../img/playstore.png";
import instalogo from "../img/instalogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./login.css";
import "./Signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const formHandler = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const signInBtn = () => {
    const data = {
      email: formInput.email,
      name: formInput.name,
      username: formInput.username,
      password: formInput.password,
    };
    fetch("http://localhost:5000/api/user/new", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/login");
        } else {
          console.log(data);
          setMessage(data.msg);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="container container-signin">
        <div className="alert">{message}</div>
        <div className="wrapper wrapper-signin">
          <div className="insta-heading">
            <img src={instalogo} alt="" />
          </div>
          <div className="or-part">
            <div className="statement">
              <span>Sign up to see photos and videos from your friends.</span>
            </div>
            <div className="facebook facebook-signin">
              <div className="other-option other-option-signin">
                <FacebookIcon />
                <span>Log in with Facebook</span>
              </div>
            </div>
            <p className="or">OR</p>
          </div>
          <div className="input-field">
            <div className="username my-2">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => formHandler(e)}
                placeholder="email address"
              />
            </div>
            <div className="username">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => formHandler(e)}
                placeholder="Full Name"
              />
            </div>
            <div className="username">
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => formHandler(e)}
                placeholder="Username"
              />
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => formHandler(e)}
                placeholder="Password"
              />
            </div>
            <div className="login">
              <button onClick={signInBtn} className="btn">
                Log In
              </button>
            </div>
          </div>

          <div className="second-wrapper second-wrapper-signin">
            <div className="singup">
              <p>
                Have a account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
          <div className="third-wrapper">
            <div className="getApp">
              <p className="app">Get the app. </p>
            </div>
            <div className="store">
              <img className="storeImg" src={appstore} alt="app sotre" />
              <img className="storeImg" src={playstore} alt="google play" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
