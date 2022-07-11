import React from "react";
import { FaPowerOff } from "react-icons/fa";
import {
  HiOutlineChartBar,
  HiOutlineUserGroup,
  HiOutlineFilm,
  HiOutlineServer,
} from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../services/auth";

function SideBarAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logoutUser(dispatch, navigate);
  };
  return (
    <nav className="sidebar-admin">
      <div>
        <div className="sidebar-admin-banner">
          <span className="admin-title">ADMIN</span>
        </div>
        <div className="sidebar-admin-category">
          <div className="admin-category">
            <HiOutlineChartBar className="admin-category-icon" />
            <span className="">Dashbroad</span>
          </div>
          <Link to="/admin/user">
            <div className="admin-category">
              <HiOutlineUserGroup className="admin-category-icon" />
              <span className="">Quản lý người dùng</span>
            </div>
          </Link>
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
      </div>
      <div className="flex justify-center mb-5">
        <div className="mt-1 text-white text-xl">admin</div>
        <Link to="/" onClick={handleLogOut}>
          <IoLogOutOutline className="admin-logout" />
        </Link>
      </div>
    </nav>
  );
}

export default SideBarAdmin;
