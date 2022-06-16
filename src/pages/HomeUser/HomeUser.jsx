import React from "react";
import PropTypes from "prop-types";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import SideBarUser from "../../components/SideBarUser/SideBarUser";
import Search from "../../components/Search/Search";
import "./HomeUser.css";

HomeUser.propTypes = {};

function HomeUser(props) {
  return (
    <div className="homeuser">
      <Header />
      <Search />
      <h1 className="homeuser-recom">Phim Mới</h1>
      <div className="homeuser-container">
        <div className="container-list">
          <Card className="container-list-item" />
        </div>
        <SideBarUser />
      </div>
      <Footer />
    </div>
  );
}

export default HomeUser;
