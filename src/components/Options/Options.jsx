import "./Options.css";

import { useNavigate } from "react-router-dom";

function Options({ showAlert, loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setLoggedIn(false);
  };

  const handleCartClick = async () => {
    if (!loggedIn) {
      showAlert("error", "You must be logged in before seeing this page!");
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };
  return (
    <div id="options">
      <button
        className="DefaultButton"
        onClick={() => {
          loggedIn ? handleSignOut() : navigate("/login");
        }}
      >
        {loggedIn ? "Sign Out" : "Sign In"}
      </button>
      <i className="bi bi-cart-plus" onClick={() => handleCartClick()}></i>
    </div>
  );
}

export default Options;
