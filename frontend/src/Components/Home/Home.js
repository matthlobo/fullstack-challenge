import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar.js";
import Books from "../Books/Books.js";
import MenuMobile from "../MenuMobile/MenuMobile";
import api from "../../services/api.js";

const Home = () => {
  const [search, setSearch] = React.useState("");
  const [user, setUser] = React.useState(null);
  const [name, setName] = React.useState(null);

  async function handleFilter({ target }) {
    let bookName = target.value;
    if (bookName !== "") {
      filtering(bookName);
    } else {
      setSearch("");
    }
  }

  async function filtering(bookName) {
    api.get(`book/${bookName}`).then((response) => {
      try {
        setSearch(bookName);
      } catch (error) {
        console.log(error.message);
      }
    });
  }

  React.useEffect(async () => {
    var loggedUser = localStorage.getItem("username");
    var loggedUserName = localStorage.getItem("name");

    if (!loggedUser) {
      var loggedUser = window.localStorage.setItem("username", "anon");
      var loggedUserName = window.localStorage.setItem("name", "John Doe");
    }

    setUser(loggedUser);
    setName(loggedUserName);
  }, [user]);

  if (user === null) return null;
  return (
    <div>
      <div className="container pb-4">
        <SearchBar id="SearchBar" value={search} filter={handleFilter} />
        <p className="welcome-text">
          Hi, <span className="welcome-text-username">{name}</span>
        </p>
        <Books filteredBook={search} />
      </div>

      <div className="container-fluid my-5">
        <div>
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

export default Home;
