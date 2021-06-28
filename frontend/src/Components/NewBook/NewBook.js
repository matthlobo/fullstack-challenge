import React from "react";
import "./NewBook.css";
import { Col } from "react-bootstrap";
import MenuMobile from "../MenuMobile/MenuMobile";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api.js";

const NewBook = () => {
  const [form, setForm] = React.useState({
    name: "",
    author: "",
    url: "",
    description: "",
  });

  const [newBookAdded, setNewBookAdded] = React.useState(null);

  let navigate = useNavigate();

  React.useEffect(async () => {
    if (!localStorage.getItem("username")) {
      alert("You must be logged in to access!");
      navigate("/");
    }
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function submitNewBook(event) {
    event.preventDefault();
    api.post("books", form).then((response) => {
      let alert = document.querySelector(".alert");
      if (response.data) {
        setNewBookAdded(true);
        setForm({ name: "", author: "", url: "", description: "" });
        scrollToTop();
        setTimeout(function () {
          setNewBookAdded(false);
        }, 5000);
      }
    });
  }

  function handleInput({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div>
      <div className="container pb-4">
        <Link to="/home" className="text-dark">
          <p className="back-arrow">
            <BsArrowLeft />
          </p>
        </Link>
        <p className="pt-2 px-4 title-new-book">Add a new book</p>
        {newBookAdded && (
          <div className="alert alert-success mt-4" role="alert">
            <p>The book has been successfully inserted</p>
          </div>
        )}
        <form onSubmit={submitNewBook} id="newBookForm">
          <div>
            <Col>
              <label htmlFor="name" className="form-label label-new-book pt-4">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control form-control-lg input-new-book"
                value={form.name}
                onChange={handleInput}
                required
              />
            </Col>

            <Col>
              <label
                htmlFor="author"
                className="form-label label-new-book pt-4"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                className="form-control form-control-lg input-new-book"
                value={form.author}
                onChange={handleInput}
                required
              />
            </Col>

            <Col>
              <label htmlFor="url" className="form-label label-new-book pt-4">
                Image URL
              </label>
              <input
                type="text"
                id="url"
                className="form-control form-control-lg input-new-book"
                value={form.url}
                onChange={handleInput}
              />
            </Col>

            <Col>
              <label
                htmlFor="description"
                className="form-label label-new-book pt-4"
              >
                Description
              </label>
              <textarea
                id="description"
                className="form-control form-control-lg textarea-new-book"
                rows="7"
                value={form.description}
                onChange={handleInput}
                required
              />
            </Col>
            <div className="row justify-content-center mb-5">
              <button className="btn btn-new-book btn-lg btn-new-book">
                Add new book
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container-fluid my-5">
        <MenuMobile />
      </div>
    </div>
  );
};

export default NewBook;
