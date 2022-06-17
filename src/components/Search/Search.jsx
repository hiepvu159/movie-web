import React from "react";
import "./Search.css";

function Search() {
  return (
    <form className="search">
      <div className="search-form">
        <input
          type="search"
          id="default-search"
          className="search-box"
          placeholder="Search Films..."
          required
        />
        <button type="submit" className="btn-search">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
