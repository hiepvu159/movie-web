import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card() {
  return (
    <>
      <div className="card">
        <img
          className="card-image"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Phim"
        />
        <div className="card-desc">
          <div className="card-name">The Coldest Sunset</div>
          <span className="card-info">Mot</span>
        </div>
        <div className="card-note">
          <span className="card-category">Phim hành động</span>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Phim"
        />
        <div className="card-desc">
          <div className="card-name">The Coldest Sunset</div>
          <span className="card-info">Mot</span>
        </div>
        <div className="card-note">
          <span className="card-category">Phim hành động</span>
        </div>
      </div>
      <div className="card">
        <Link to="/phim">
          <img
            className="card-image"
            src="https://upload.wikimedia.org/wikipedia/vi/b/b4/Poster_phim_7_thi_th%E1%BB%83.jpg"
            alt="Phim"
          />
          <div className="card-desc">
            <div className="card-name">The Coldest Sunset</div>
            <span className="card-info">Mot</span>
          </div>
          <div className="card-note">
            <span className="card-category">Phim hành động</span>
          </div>
        </Link>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://i.imgur.com/plLvz9w.jpg"
          alt="Phim"
        />
        <div className="card-desc">
          <div className="card-name">The Coldest Sunset</div>
          <span className="card-info">Mot</span>
        </div>
        <div className="card-note">
          <span className="card-category">Phim hành động</span>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Phim"
        />
        <div className="card-desc">
          <div className="card-name">The Coldest Sunset</div>
          <span className="card-info">Mot</span>
        </div>
        <div className="card-note">
          <span className="card-category">Phim hành động</span>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Phim"
        />
        <div className="card-desc">
          <div className="card-name">The Coldest Sunset never mind im fire</div>
          <span className="card-info">Rating</span>
        </div>
        <div className="card-note">
          <span className="card-category">Phim hành động</span>
        </div>
      </div>
      <div className="card">
        <img
          className="card-image"
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt="Phim"
        />
        <div className="card-desc">
          <div className="card-name">The Coldest Sunset</div>
          <span className="card-info">Rating</span>
        </div>
        <div className="card-note">
          <span className="card-category">Phim hành động</span>
        </div>
      </div>
    </>
  );
}

export default Card;
