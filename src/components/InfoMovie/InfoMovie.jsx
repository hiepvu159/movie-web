import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

InfoMovie.propTypes = {};

function InfoMovie(props) {
  return (
    <div className="background-info">
      <img
        src="https://i1-giaitri.vnecdn.net/2022/05/12/doctor-strange-2.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=wJ222WrUVceW0oQR8-Pbhw"
        alt="placeholder"
        className="thumbnail"
      />
      <div className="content-header">
        <img
          src="https://bloganchoi.com/wp-content/uploads/2022/05/dr-strange-poster.jpg"
          alt="poster"
          className="content-poster"
        />
        <div className="content-info">
          <div className="content-info-movie">
            <section className="content-name">
              Phù Thủy Tối Thượng Trong Đa Vũ Trụ Hỗn Loạn
            </section>
            <section className="content-text">Thời lượng: 120 phút</section>

            <section className="content-text">Danh mục: Phim chiếu rạp</section>
            <section className="content-text">
              Thể loại: Khoa học viễn tưởng
            </section>
            <section className="content-text">Quốc gia: Mỹ</section>
            <section className="content-text">Năm phát hành: 2022</section>
            <section className="content-text">Diễn viên:</section>
            <section className="content-text">Đạo diễn</section>

            <Link to="/movie/id/watch" className="btn-play">
              Xem phim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoMovie;
