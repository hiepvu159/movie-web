import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBarAdmin from "../../components/SideBarAdmin";

function Layout(props) {
  return (
    <div className="w-full flex">
      <SideBarAdmin />
      <Outlet />
    </div>
  );
}

export default Layout;
