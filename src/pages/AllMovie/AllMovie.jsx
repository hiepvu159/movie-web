import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import Filter from "../../components/Filter/Filter";

AllMovie.propTypes = {};

function AllMovie(props) {
  return (
    <div className="movie-main">
      <div className="movie-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="filter">
        <Filter />
      </div>
    </div>
  );
}

export default AllMovie;
