import React from "react";
import PropTypes from "prop-types";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import SidebarAdmin from "../../components/SideBarAdmin/SideBarAdmin";

HomeAdmin.propTypes = {};

function HomeAdmin(props) {
  return (
    <div className="home-admin">
      <HeaderAdmin />
      <SidebarAdmin />
    </div>
  );
}

export default HomeAdmin;
