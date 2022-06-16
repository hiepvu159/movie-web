import React from "react";
import logo from "../../assets/logo.png";
import {
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineFilm,
  HiOutlineServer,
} from "react-icons/hi";
import "./SideBarAdmin.css";

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
          <HiOutlineFilm className="admin-category-icon" />
          <span className="">Quản lý danh sách phim</span>
        </div>
      </div>
    </nav>
  );
}

export default SideBarAdmin;
