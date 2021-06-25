import React from "react";
import "./Books.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Row, Col } from "react-bootstrap";

const Books = ({ filteredBook }) => {
  const [books, setBooks] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalBooks, setTotalBooks] = React.useState(null);

  React.useEffect(() => {
    async function fetchAllBooks() {
      if (filteredBook == "") {
        api.get("books").then((response) => {
          setBooks(response.data.books);
          setTotalBooks(null);
          setPage(1);
        });
      } else {
        api
          .get(`books?name=${filteredBook}&page=${page}&size=2`)
          .then((response) => {
            setBooks(response.data.books);
            setTotalBooks(response.data.totalBooks);
          });
      }
    }
    fetchAllBooks();
  }, [filteredBook]);

  async function loadMore() {
    let nextPage = page + 1;
    api
      .get(`books?name=${filteredBook}&page=${nextPage}&size=2`)
      .then((response) => {
        setBooks([...books.slice(), ...response.data.books]);
        setTotalBooks(response.data.totalBooks);
        setPage(nextPage);
      });
  }

  if (books === null) return null;
  return (
    <div>
      <Row className="justify-content-md-center pt-4">
        {books.map((item) => (
          <Col xs="4" lg="2" sm="2" key={item.id}>
            <div className="book-card">
              <Link to={`/about/${item.id}`}>
                {item.url ? (
                  <img src={item.url} className="book-image" />
                ) : (
                  <img src="GenericBook.png" className="book-image" />
                )}
                <p key={item.name} className="book-title">
                  {item.name}
                  <br />
                  <span key={item.author} className="book-author">
                    by {item.author}
                  </span>
                </p>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
      {
       totalBooks == null || page * 2 >= totalBooks 
          ? (<p></p>) 
          : (<div className="row mb-5 mb-2">
              <div className="col-md-auto d-flex justify-content-center">
                <button onClick={loadMore} className="btn btn-primary">
                  Load More
                </button>
              </div>
            </div>)
      }
    </div>
  );
};

export default Books;
