import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logo.png";
import ButtonGoogle from "../../components/ButtonGoogle";
import ButtonFaceBook from "../../components/ButtonFacebook";
import "./Login.css";

Login.propTypes = {};

function Login(props) {
  return (
    <div className="login">
      <div className="login-main">
        <div className="login-main-bg">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="bg"
            alt="Sample image"
          />
        </div>
        <div className="login-main-form">
          <form>
            <div className="login-social">
              <p className="login-social-text">Sign in with</p>
              <ButtonFaceBook />

              <ButtonGoogle />
            </div>

            <div className="separate">
              <p className="separate-text">Or</p>
            </div>

            <div className="login-form">
              <input
                type="text"
                className="form-email"
                placeholder="Email address"
                autoComplete="user-name"
              />
            </div>

            <div className="login-form">
              <input
                type="password"
                className="form-password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </div>
            <div className="login-action">
              <div>
                <input type="checkbox" className="form-checkbox" />
                <label className="form-checkbox-text">Remember me</label>
              </div>
              <a href="#!">Forgot password?</a>
            </div>

            <div className="action-login">
              <button className="btn-login">Login</button>
              <p className="login-text">
                Don't have an account?
                <a href="#!" className="login-register">
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
