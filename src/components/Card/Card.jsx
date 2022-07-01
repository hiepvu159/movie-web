import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string,
  poster_url: PropTypes.string,
  year: PropTypes.number,
};

function Card(props) {
  const { movies } = props;
  return (
    <>
      {movies.map((movie) => (
        <div className="card">
          <Link to="/movie/id">
            <div key={movie.id}>
              <img className="card-image" src={movie.poster_url} alt="Phim" />
              <div className="card-desc">
                <span className="card-name">{movie.name}</span>
                <span className="card-info">{movie.year}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Card;
