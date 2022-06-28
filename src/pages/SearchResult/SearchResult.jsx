import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card/Card";
import "./SearchResult.css";
SearchResult.propTypes = {};

function SearchResult(props) {
  return (
    <>
      <h1 className="search-title">Kết quả tìm kiếm</h1>
      <div className="search-content">
        <div className="search-content-list">
          <Card className="content-list-item" />
        </div>
      </div>
    </>
  );
}

export default SearchResult;
