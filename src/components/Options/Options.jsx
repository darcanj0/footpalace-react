import "./Options.css";

import { useNavigate } from "react-router-dom";
import api from "api";

function Options({ showAlert, checkIfLoggedIn }) {
  const navigate = useNavigate();

  const handleCartClick = async () => {
    const loggedIn = checkIfLoggedIn();
    if (!loggedIn) {
      showAlert("error", "You must be logged in before seeing this page!");
      navigate("/login");
    } else {
      //token must be valid and user must exist
      try {
        const response = await api.get(
          `/users/find-user/${localStorage.getItem("userId")}`,
          { headers: { Authorization: localStorage.getItem("token") } }
        );
        //this request will verify the user id and the user token
      } catch (error) {
        showAlert("error", "You are unauthorized. Try logging in again!");
        navigate("/login");
      }
    }
  };
  return (
    <div id="options">
      <button
        className="DefaultButton"
        onClick={() => {
          showAlert("error", "In development");
        }}
      >
        Sign In
      </button>
      <i className="bi bi-cart-plus" onClick={() => handleCartClick}></i>
    </div>
  );
}

export default Options;
