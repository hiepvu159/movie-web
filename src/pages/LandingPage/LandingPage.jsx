import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SideBarUser from "../../components/SideBarUser/SideBarUser";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";
import "./LandingPage.css";
LandingPage.propTypes = {};

function LandingPage(props) {
  return (
    <>
      <Header />
      <Search />
      <div className="main">
        <div className="main-content">
          <div className="content-header">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/b/b4/Poster_phim_7_thi_th%E1%BB%83.jpg"
              alt="poster"
              className="content-poster"
            />
            <div className="content-info">
              <section className="content-nameitem">Ten phim</section>
              <div>
                <section>Quốc gia:</section>
                <section>Thể loại</section>
                <section>Năm phát hành:</section>
                <section>Danh mục:</section>
              </div>
              <Link to="/phim/test" class="btn-play">
                Xem phim
              </Link>
            </div>
          </div>
          <div className="content-des">
            <section className="content-des-title">Nội dung phim</section>
            <section className="content-des-summary">uwu</section>
          </div>
        </div>
        <SideBarUser />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
