import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} class="header-logo" alt="Movie Logo" />
        <h1 className="header-name">Movie</h1>
      </div>

      <div class="header-category">
        <a href="#" className="category-item">
          Trang chủ
        </a>
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
        <a href="#" className="category-item">
          Đăng nhập
        </a>
      </div>
    </header>
  );
}

export default Header;
