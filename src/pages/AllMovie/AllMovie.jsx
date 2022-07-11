import React, { useState, useEffect } from "react";
import { getMovies } from "../../services/movie";
import { Link } from "react-router-dom";
import Card from "../../components/Card";

function AllMovie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies(setMovies);
  }, []);
  return (
    <div className="movie-main">
      <div className="movie-list">
        {movies.map((movie) => (
          <Link to={`/movies/${movie._id}`} key={movie._id}>
            <Card data={movie} />
          </Link>
        ))}
      </div>
      <div className="filter"></div>
    </div>
  );
}

export default AllMovie;
