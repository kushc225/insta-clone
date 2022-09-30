import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import appstore from "../img/appstore.png";
import playstore from "../img/playstore.png";
import instalogo from "../img/instalogo.png";
import Footer from "../components/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const loginBtn = () => {
    fetch("http://localhost:5000/api/user/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          localStorage.setItem("token", data.token);
          dispatch({
            type: "loginStart",
          });
          localStorage.setItem("name", data.name);
          navigate("/");
        } else {
          alert(data.msg);
          setMessage(data.msg);
        }
      })
      .catch((data) => setMessage(data.msg));
  };
  return (
    <>
      <div className="container">
        <div className="showAlert">{message}</div>
        <div className="phone-image-container">
          <img
            src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
            alt="instagram"
          />
        </div>
        <div className="wrapper">
          <div className="insta-heading">
            <img src={instalogo} alt="" />
          </div>
          <div className="input-field">
            <div className="username">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="phone number, username or email"
              />
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="login">
              <button onClick={loginBtn} className="btn">
                Log In
              </button>
            </div>
          </div>
          <div className="or-part">
            <p className="or">OR</p>
            <div className="facebook">
              <div className="other-option">
                <span>
                  <FacebookIcon />
                </span>
                Log in with Facebook
              </div>
            </div>
            <div className="forget-password">Forget password? </div>
          </div>

          <div className="second-wrapper">
            <div className="singup">
              <p>
                Don't have an account? <Link to="/signin">Sign up</Link>
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
      <Footer />
    </>
  );
};

export default Login;
