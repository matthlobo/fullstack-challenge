import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../SearchBar/SearchBar.js";
import Books from "../Books/Books.js";
import MenuMobile from "../MenuMobile/MenuMobile";

const Home = () => {
  const [search, setSearch] = React.useState("");
  const [user, setUser] = React.useState(null);
  const [name, setName] = React.useState(null);

  async function handleFilter({ target }) {
    let bookName = target.value;
    if (bookName !== "") {
      setSearch(bookName);
    } else {
      setSearch("");
    }
  }

  React.useEffect(async () => {
    var loggedUser = localStorage.getItem("username");
    var loggedUserName = localStorage.getItem("name");

    if (!loggedUser) {
      loggedUser = window.localStorage.setItem("username", "anonymous");
      loggedUserName = window.localStorage.setItem("name", "Guest");
    }

    setUser(loggedUser);
    setName(loggedUserName);
  }, [user]);

  if (user === null) return null;
  return (
    <div>
      <div className="container pb-4">
        <SearchBar id="SearchBar" filter={handleFilter} />
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
