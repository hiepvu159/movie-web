import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBarAdmin from "../../components/SideBarAdmin";

function Layout(props) {
  return (
    <div className="flex">
      <SideBarAdmin />
      <div className="w-full flex flex-col">
        <HeaderAdmin />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
