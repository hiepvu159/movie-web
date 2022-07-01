import React from "react";
import { Link } from "react-router-dom";

function Search() {
  return (
    <form className="search">
      <div className="search-form">
        <input
          type="search"
          id="default-search"
          className="search-box"
          placeholder="Điền tên phim muốn tìm kiếm. . . . "
          autocomplete="off"
        />
        <Link to="/results/movie" className="btn-search">
          Search
        </Link>
      </div>
    </form>
  );
}

export default Search;
