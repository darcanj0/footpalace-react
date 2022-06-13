import "./Home.css";

import HomeContainer from "components/HomeContainer/HomeContainer";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import api from "api";

function Home() {
  //show alert function
  const showAlert = (type, message) => {
    if (type === "error") {
      toast.error(message, {
        iconTheme: {
          primary: "#a52a2a",
          secondary: "#fff",
        },
        style: { background: "#333", color: "#fff" },
      });
    } else if (type === "success") {
      toast.success(message, {
        iconTheme: {
          primary: "#2AA52A",
          secondary: "#fff",
        },
        style: { background: "#333", color: "#fff" },
      });
    }
  };

  const navigate = useNavigate();

  const checkUserAuthorization = async () => {
    const loggedIn = localStorage.getItem("token");
    //must have a token
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

  useEffect(() => {
    checkUserAuthorization();
  }, []);
  return (
    <div className="Home">
      <HomeContainer showAlert={showAlert} />
    </div>
  );
}

export default Home;
