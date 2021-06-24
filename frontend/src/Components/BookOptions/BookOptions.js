import React from "react";
import "./BookOptions.css";
import { Row, Col } from "react-bootstrap";
import {
  BsLayoutTextSidebar,
  BsMusicNoteBeamed,
  BsUpload,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const BookOptions = () => {
  return (
    <div className="book-options row justify-content-center">
      <Row className="p-2">
        <nav className="nav-options">
          <Col style={{ textAlign: "center" }}>
            <Link to="/error" className="text-dark">
              <BsLayoutTextSidebar />
              <span className="text-center font-weight-bold pl-2">Read</span>
            </Link>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Link to="/error" className="text-dark">
              <BsMusicNoteBeamed />
              <span className="text-center pl-2">Listen</span>
            </Link>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Link to="/error" className="text-dark">
              <BsUpload />
              <span className="text-center pl-2">Share</span>
            </Link>
          </Col>
        </nav>
      </Row>
    </div>
  );
};

export default BookOptions;
