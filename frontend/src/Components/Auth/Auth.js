import React from "react";
import axios from "axios";
import "./Auth.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = React.useState("");
  let navigate = useNavigate();

  React.useEffect(async () => {
    var loggedUser = localStorage.getItem("username");
    if (loggedUser) {
      navigate("/home");
    }
  }, [username]);

  async function handleSubmit(e) {
    e.preventDefault();
    setUsername(username);
    const response = await axios("https://api.github.com/users/" + username);

    window.localStorage.setItem("username", username);
    window.localStorage.setItem("name", response.data.name);
    navigate(`/home/${username}`);
  }

  function handleAnon() {
    window.localStorage.setItem("username", "anonymous");
    window.localStorage.setItem("name", "Guest");
  }

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <img src={"./lib.png"} className="mt-5"/>
        </div>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Login with your GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" className="mt-4">
            Log In
          </button>
        </form>
      </div>
      <div className="container">
        <p className="text-center mt-3">Or</p>
        <div className="row d-flex justify-content-center">
          <Link to="home" className="text-dark">
            <button className="btn btn-guest" onClick={handleAnon}>
              Log In as Guest
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
