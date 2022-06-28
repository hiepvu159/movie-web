import React from "react";
import ReactHlsPlayer from "react-hls-player";
import { FaRegLightbulb } from "react-icons/fa";
import PropTypes from "prop-types";
import SideBarUser from "../../components/SideBarUser";
import InfoMovie from "../../components/InfoMovie";
import CommentBox from "../../components/CommentBox";

import "./MoviePage.css";
MoviePage.propTypes = {};

function MoviePage(props) {
  return (
    <>
      <InfoMovie />
      <div className="main">
        <div className="main-content">
          <div className="movie-player">
            <ReactHlsPlayer
              src="https://kd.hd-bophim.com/20220621/15089_6a803cec/index.m3u8"
              autoPlay={false}
              controls={true}
            />
          </div>

          <div className="user-action">
            <div className="btn-turnoff">
              <FaRegLightbulb />
              <button type="button">Tắt đèn</button>
            </div>
            <div className="action-rating">Rating</div>
          </div>
          <div className="movie-episodes">
            <span className="movie-episodes-title">Chọn tập phim</span>
            <div className="movie-episodes-list">
              <button className="movie-episodes-item">1</button>
              <button className="movie-episodes-item">2</button>
              <button className="movie-episodes-item">3</button>
              <button className="movie-episodes-item">4</button>
            </div>
          </div>
          <CommentBox />
        </div>
        <SideBarUser />
      </div>
    </>
  );
}

export default MoviePage;
