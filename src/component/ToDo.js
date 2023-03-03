import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li key={text.id} id={text.id}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
