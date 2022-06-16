import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import { IoLogoFacebook } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

Login.propTypes = {};

function Login(props) {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <img src={logo} alt="logo" className="login-logo" />
        <span className="login-card-title">Đăng nhập vào Movie</span>
        <div class="login-card-social">
          <button class="btn-login-social">
            <div class="login-social-info">
              <FcGoogle className="login-icon" />
              <span class="login-social-title">Continue with Google</span>
            </div>
          </button>

          <button class="btn-login-social">
            <div class="login-social-info">
              <IoLogoFacebook className="login-icon icon-facebook" />
              <span class="login-social-title">Continue with Facebook</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
