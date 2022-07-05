import React, { useState } from "react";
import login from "../../assets/login.png";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth";

function Register(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      username: username,
      password: password,
    };
    await registerUser(newUser, dispatch, navigate);
  };
  return (
    <div className="login">
      <div className="login-main">
        <div className="login-main-bg">
          <img src={login} className="bg" alt="Sample image" />
        </div>
        <div className="login-main-form">
          <p className="register-title">Đăng ký</p>
          <form onSubmit={handleSubmit}>
            <div className="login-form">
              <input
                type="text"
                className="form-email"
                placeholder="Tên người dùng..."
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login-form">
              <input
                type="text"
                className="form-email"
                placeholder="Email...."
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
            <div className="flex justify-between">
              <div className="action-login">
                <button className="btn-login">Đăng ký</button>
              </div>
              <Link to="/login">
                <div className="action-login">
                  <button className="btn-login">Quay về trang đăng ký</button>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
