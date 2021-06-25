import React from "react";
import "./About.css";
import { useParams, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import BookOptions from "../BookOptions/BookOptions";
import { BsArrowLeft } from "react-icons/bs";
import api from "../../services/api";

const About = () => {
  const params = useParams();

  const [book, setBook] = React.useState(null);

  React.useEffect(() => {
    async function fetchDetailedBook() {
      api.get(`books/${params.id}`).then((response) => {
        setBook(response.data);
      });
    }

    fetchDetailedBook();
  }, []);

  if (book === null) return null;
  return (
    <div>
      <div
        className="detail-background"
        style={{ backgroundImage: "url(/oval-desktop.png)" }}
      >
        <div className="container pb-4">
          <Link to="/home" className="text-dark">
            <p className="back-arrow">
              <BsArrowLeft />
            </p>
          </Link>
          <div className="row justify-content-center text-center">
            <Col>
              <img src={book.url} className="about-book-image" />
            </Col>
          </div>
        </div>
      </div>
      <div className="container pb-4">
        <h1 className="p-1">{book.name}</h1>
        <p className="about-book-author pl-2">{book.author}</p>
        <p className="about-text py-3 pl-2 text-justify">{book.description}</p>
      </div>

      <div className="p-2 my-4 mx-4">
        <BookOptions />
      </div>
    </div>
  );
};

export default About;
