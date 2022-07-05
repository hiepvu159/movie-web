import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth";
import ButtonGoogle from "../../components/ButtonGoogle";
import ButtonFaceBook from "../../components/ButtonFacebook";
import login from "../../assets/login.png";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
    };

    await loginUser(newUser, dispatch, navigate);
  };

  return (
    <div className="login">
      <div className="login-main">
        <div className="login-main-bg">
          <img src={login} className="bg" alt="Sample" />
        </div>
        <div className="login-main-form">
          <form onSubmit={handleSubmit}>
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
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-form">
              <input
                type="password"
                className="form-password"
                placeholder="Mật khẩu..."
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
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
              <button
                className="px-7 py-3 bg-black text-white font-medium text-sm rounded shadow-md hover:bg-red-500"
                type="submit"
              >
                Đăng nhập
              </button>
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
