import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import DropdownBox from "../../components/DropdownBox";
import axios from "axios";
AllMovie.propTypes = {};

function AllMovie(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovie = async () => {
      try {
        await axios
          .get(`movies`, {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmQxOGFhODI4OTBjZjM3YTFiMGY3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjU2OTk0MCwiZXhwIjoxNjU3MDAxOTQwfQ.Udp3GuQd_bY9DGpNePjW_rn8H1h3jctsI22Amj-F2e0",
            },
          })
          .then((res) => {
            const movie = res.data;
            console.log(movie);
            setMovies(movie);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, []);
  return (
    <div className="movie-main">
      <div className="movie-list">
        <Card movies={movies} />
      </div>
      <div className="filter">
        <DropdownBox />
      </div>
    </div>
  );
}

export default AllMovie;
