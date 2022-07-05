import React from "react";
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
        <span className="admin-title">ADMIN</span>
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
          <span className="">Quản lý danh mục</span>
        </div>
        <Link to="/admin/movie">
          <div className="admin-category">
            <HiOutlineFilm className="admin-category-icon" />
            <span className="">Quản lý danh sách phim</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default SideBarAdmin;
