import React from "react";
import "./searchBar.css";
import { Row } from "react-bootstrap";

const SearchBar = ({ id, filter, ...props }) => {

  return (
    <Row className="justify-content-md-center">
      <div className="search-bar">
        <input
          type="text"
          className="search-bar-input"
          id={id}
          name={id}
          placeholder="Search book"
          onChange={filter}
        />
      </div>
      
    </Row>
  );
};

export default SearchBar;
