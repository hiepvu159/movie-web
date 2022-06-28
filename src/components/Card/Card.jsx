import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card">
      <Link to="/movie/id">
        <img
          className="card-image"
          src="https://upload.wikimedia.org/wikipedia/vi/b/b4/Poster_phim_7_thi_th%E1%BB%83.jpg"
          alt="Phim"
        />
        <div className="card-desc">
          <span className="card-name">Ten Phim</span>
          <span className="card-info">Rating</span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
