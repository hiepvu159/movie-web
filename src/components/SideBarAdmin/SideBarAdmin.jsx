import React from "react";
import logo from "../../assets/logo.png";

import {
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineFilm,
  HiOutlineServer,
} from "react-icons/hi";
import { Link } from "react-router-dom";

function SideBarAdmin() {
  return (
    <nav className="sidebar-admin">
      <div className="sidebar-admin-banner">
        <img src={logo} alt="logo" className="admin-logo" />
        <span className="admin-title">MOVIE</span>
      </div>
      <div className="sidebar-admin-category">
        <div className="admin-category">
          <HiOutlineChartBar className="admin-category-icon" />
          <span className="">Dashbroad</span>
        </div>
        <div className="admin-category">
          <HiOutlineUserGroup className="admin-category-icon" />
          <span className="">Quản lý người dùng</span>
        </div>
        <div className="admin-category">
          <HiOutlineServer className="admin-category-icon" />
          <span className="">Quản lý danh mục phim</span>
        </div>
        <div className="admin-category">
          <Link to="/admin/movie">
            <HiOutlineFilm className="admin-category-icon" />
            <span className="">Quản lý danh sách phim</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SideBarAdmin;
