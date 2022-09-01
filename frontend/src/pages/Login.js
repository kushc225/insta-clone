import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import appstore from "../img/appstore.png";
import playstore from "../img/playstore.png";
import instalogo from "../img/instalogo.png";
import Footer from "../components/Footer";
const Login = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.loginReducer);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginBtn = () => {
    dispatch({
      type: "loginStart",
    });
    console.log(login, username, password);
  };
  return (
    <>
      <div className="container">
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
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
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
                <span>f </span> Log in with Facebook
              </div>
            </div>
            <div className="forget-password">Forget password? </div>
          </div>

          <div className="second-wrapper">
            <div>
              <p className="singup">
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
