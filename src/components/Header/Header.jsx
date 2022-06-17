import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} className="header-logo" alt="Movie Logo" />
        <h1 className="header-name">Movie</h1>
      </div>

      <div className="header-category">
        <Link to="/" className="category-item">
          Trang chủ
        </Link>
        <a href="#" className="category-item">
          Thể loại
        </a>
        <a href="#" className="category-item">
          Phim bộ
        </a>
        <a href="#" className="category-item">
          Phim lẻ
        </a>
        <a href="#" className="category-item">
          Phim chiếu rạp
        </a>
        <Link to="/login" className="category-item">
          Đăng nhập
        </Link>
      </div>
    </header>
  );
}

export default Header;
