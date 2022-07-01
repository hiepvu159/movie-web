import React from "react";
import login from "../../assets/login.png";
import PropTypes from "prop-types";

Register.propTypes = {};

function Register(props) {
  return (
    <div className="login">
      <div className="login-main">
        <div className="login-main-bg">
          <img src={login} className="bg" alt="Sample image" />
        </div>
        <div className="login-main-form">
          <p className="register-title">Đăng ký</p>
          <form>
            <div className="login-form">
              <input
                type="text"
                className="form-email"
                placeholder="Email...."
                autoComplete="user-name"
              />
            </div>

            <div className="login-form">
              <input
                type="password"
                className="form-password"
                placeholder="Mật khẩu..."
                autoComplete="off"
              />
            </div>
            <div className="login-form">
              <input
                type="password"
                className="form-password"
                placeholder="Xác nhận mật khẩu..."
                autoComplete="off"
              />
            </div>
            <div className="action-login">
              <button className="btn-login">Đăng ký</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
