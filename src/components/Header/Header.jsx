import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-left-item">
          <div className="header-left">
            <img src={logo} className="header-logo" alt="Movie Logo" />
            <h1 className="header-name">Movie</h1>
          </div>
          <div className="header-category">
            <Link to="/" className="category-item">
              Trang chủ
            </Link>
            <Link to="/movies" className="category-item">
              Phim
            </Link>
          </div>
        </div>
        <Link to="/login" className="header-login">
          Đăng nhập
        </Link>
      </header>
    </>
  );
}

export default Header;
