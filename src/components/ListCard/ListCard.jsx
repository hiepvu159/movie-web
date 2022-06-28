import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

ListCard.propTypes = {};

function ListCard(props) {
  return (
    <div className="list-item-card scrollbar">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default ListCard;
