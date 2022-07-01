import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card";
import Search from "../../components/Search";

SearchResult.propTypes = {};

function SearchResult(props) {
  return (
    <>
      <h1 className="search-title">Kết quả tìm kiếm</h1>
      {/* <Search /> */}
      <div className="search-content">
        <div className="search-content-list">
          <div className="search-item">
            <Card />
          </div>
          <div className="search-item">
            <Card />
          </div>
          <div className="search-item">
            <Card />
          </div>
          <div className="search-item">
            <Card />
          </div>
          <div className="search-item">
            <Card />
          </div>
          <div className="search-item">
            <Card />
          </div>
          <div className="search-item">
            <Card />
          </div>
          <div className="search-item">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
