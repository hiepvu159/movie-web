import React from "react";
import HeaderAdmin from "../../components/HeaderAdmin";
import SideBarAdmin from "../../components/SideBarAdmin";

function Layout(props) {
  return (
    <div className="flex">
      <SideBarAdmin />
      <HeaderAdmin />
      {props.children}
    </div>
  );
}

export default Layout;
