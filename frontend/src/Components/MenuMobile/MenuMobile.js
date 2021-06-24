import React from "react";
import "./MenuMobile.css";
import { Row, Col } from "react-bootstrap";
import {
  BsFillHouseDoorFill,
  BsPlusSquareFill,
  BsPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const MenuMobile = () => {
  return (
    <div className="menu-mobile row justify-content-center">
      <Row className="p-2">
        <nav className="nav-menu-mobile">
          <Col style={{ textAlign: "center" }}>
            <Link to="/home" className="text-dark">
              <BsFillHouseDoorFill />
              <p>Home</p>
            </Link>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Link to="/newBook" className="text-dark">
              <BsPlusSquareFill />
              <p>Add Book</p>
            </Link>
          </Col>

          <Col style={{ textAlign: "center" }}>
            <Link to="/profile" className="text-dark">
              <BsPersonFill />
              <p className="text-center">Profile</p>
            </Link>
          </Col>
        </nav>
      </Row>
    </div>
  );
};

export default MenuMobile;
