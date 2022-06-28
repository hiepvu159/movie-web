import React from "react";

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
        <button className="btn-search">Search</button>
      </div>
    </form>
  );
}

export default Search;
