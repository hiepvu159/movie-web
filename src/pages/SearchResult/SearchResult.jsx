import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import "./SearchResult.css";
SearchResult.propTypes = {};

function SearchResult(props) {
  return (
    <>
      <Header />
      <Search />
      <h1 className="search-title">Kết quả tìm kiếm</h1>
      <div className="search-content">
        <div className="search-content-list">
          <Card className="content-list-item" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchResult;
