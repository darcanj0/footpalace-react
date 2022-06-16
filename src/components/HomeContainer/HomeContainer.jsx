import "./HomeContainer.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";
import Footer from "components/Footer/Footer";

import { useState, useEffect } from "react";
import api from "api";

const HomeContainer = ({ showAlert }) => {
  //bootsList
  const [boots, setBoots] = useState([]);
  //adminView
  const [adminView, setAdminView] = useState(false);

  const checkIfLoggedIn = () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    if (!userId || !token) {
      return false;
    } else {
      return true;
    }
  };
  const checkIfConsumer = async () => {
    const loggedIn = checkIfLoggedIn();
    if (!loggedIn) {
      setAdminView(false);
    } else {
      //buscar o usuario na api
      //saber se o usuario e admin
      const response = await api.get(
        `/users/find-user/${localStorage.getItem("userId")}`,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setAdminView(response.data.admin);
    }
  };

  useEffect(() => {
    checkIfConsumer();
  }, []);

  //search system
  const [searchInputValue, setSearchInputValue] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  return (
    <div className="HomeContainer">
      <Header
        handleSearchInputChange={handleSearchInputChange}
        searchInputValue={searchInputValue}
      />
      {!adminView && (
        <Options showAlert={showAlert} checkIfLoggedIn={checkIfLoggedIn} />
      )}
      <BootsList
        adminView={adminView}
        showAlert={showAlert}
        boots={boots}
        setBoots={setBoots}
        setSearchInputValue={setSearchInputValue}
        searchInputValue={searchInputValue}
      />
      <Footer />
    </div>
  );
};

export default HomeContainer;
