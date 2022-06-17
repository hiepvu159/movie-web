import React from "react";
import ReactHlsPlayer from "react-hls-player";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import SideBarUser from "../../components/SideBarUser/SideBarUser";
import "./MoviePage.css";
MoviePage.propTypes = {};

function MoviePage(props) {
  return (
    <>
      <Header />
      <Search />
      <div className="main">
        <div className="main-content">
          <div className="movie-info">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/b/b4/Poster_phim_7_thi_th%E1%BB%83.jpg"
              alt="poster"
              className="movie-poster"
            />
            <div className="movie-desc">
              <span className="movie-title">Ten Phim</span>
              <span className="movie-summary">Tom Tat</span>
            </div>
          </div>

          <ReactHlsPlayer
            src="https://kd.hd-bophim.com/20220616/14727_b65c0f25/index.m3u8"
            autoPlay={false}
            controls={true}
            className="movie-player"
          />

          <div className="user-action">
            <button type="button">Tat den</button>
            <div className="action-rating">Vote ***********</div>
          </div>
          <div className="movie-episodes">
            <span className="movie-episodes-title">Chọn tập phim</span>
            <div className="movie-episodes-list">
              <a href="#" className="movie-episodes-item">
                1
              </a>
              <a href="#" className="movie-episodes-item">
                2
              </a>
              <a href="#" className="movie-episodes-item">
                3
              </a>
              <a href="#" className="movie-episodes-item">
                4
              </a>
            </div>
          </div>
          <div className="movie-comment">comment</div>
        </div>
        <SideBarUser />
      </div>
      <Footer />
    </>
  );
}

export default MoviePage;
