import React from "react";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = React.useState(null);
  const [name, setName] = React.useState(null);

  let navigate = useNavigate();

  React.useEffect(async () => {
    if (!localStorage.getItem("username")) {
      alert("You must be logged in to access!");
      navigate("/");
    }
  }, [user]);

  React.useEffect(async () => {
    var loggedUser = localStorage.getItem("username");
    var loggedUserName = localStorage.getItem("name");

    setUser(loggedUser);
    setName(loggedUserName);
  }, [user]);

  function handleLogout() {   
    localStorage.clear();
    navigate("/");
  }

  if (user === null) return null;
  return (
    <div>
      <div className="container">
        <div className="col">
          <label htmlFor="name" className="form-label label-new-book pt-4">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control form-control-lg input-new-book"
            value={name}
            disabled={true}
          />
        </div>

        <div className="col">
          <label htmlFor="username" className="form-label label-new-book pt-4">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control form-control-lg input-new-book"
            value={user}
            disabled={true}
          />
        </div>

        <div className="row justify-content-center mb-5">
          <button
            className="btn btn-profile-logout btn-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="container-fluid my-5">
        <MenuMobile />
      </div>
    </div>
  );
};

export default Profile;
