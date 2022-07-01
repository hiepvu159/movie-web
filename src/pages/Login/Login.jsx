import React from "react";
import PropTypes from "prop-types";
import login from "../../assets/login.png";

import ButtonGoogle from "../../components/ButtonGoogle";
import ButtonFaceBook from "../../components/ButtonFacebook";
import "./Login.css";
import { Link } from "react-router-dom";

Login.propTypes = {};

function Login(props) {
  return (
    <div className="login">
      <div className="login-main">
        <div className="login-main-bg">
          <img src={login} className="bg" alt="Sample image" />
        </div>
        <div className="login-main-form">
          <form>
            <div className="login-social">
              <p className="login-social-text">Đăng nhập bằng</p>
              <ButtonFaceBook />

              <ButtonGoogle />
            </div>

            <div className="separate">
              <p className="separate-text">Hoặc</p>
            </div>

            <div className="login-form">
              <input
                type="text"
                className="form-email"
                placeholder="Email..."
                autoComplete="user-name"
              />
            </div>

            <div className="login-form">
              <input
                type="password"
                className="form-password"
                placeholder="Mật khẩu..."
                autoComplete="current-password"
              />
            </div>
            <div className="login-action">
              <div>
                <input type="checkbox" className="form-checkbox" />
                <label className="form-checkbox-text">Ghi Nhớ</label>
              </div>
              <a href="#!">Quên mật khẩu?</a>
            </div>

            <div className="action-login">
              <button className="btn-login">Đăng nhập</button>
              <p className="login-text">
                Bạn chưa có tài khoản?
                <Link to="/register" className="login-register">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
