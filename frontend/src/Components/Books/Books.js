import React from "react";
import "./Books.css";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Row, Col } from "react-bootstrap";

const Books = ({ filteredBook }) => {
  const [books, setBooks] = React.useState(null);
  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    async function fetchAllBooks() {
      if (filteredBook === "") {
        api.get("books").then((response) => {
          setBooks(response.data);
        });
      } else {
        api.get(`book/${filteredBook}/${page}`).then((response) => {
          setBooks(response.data);
        });
      }
    }
    fetchAllBooks();
    setPage(0);
  }, [filteredBook]);

  React.useEffect(() => {
    api.get(`book/${filteredBook}/${page}`).then((response) => {
      if(!response.data){
        console.log('Ta vazio')
      }else {
        setBooks((books) => [...books, ...response.data]);
      }
      console.log(response.data);
    });
  }, [page]);

  const loadMore = () => {
    setPage((page) => page + 1);
    console.log(page);
  };

  if (books === null) return null;
  return (
    <div>
      <Row className="justify-content-md-center pt-4">
        {books.length > 0 &&
          books.map((item) => (
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
      <div className="col-md-auto">
        <button onClick={loadMore} className="btn btn-primary">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Books;
