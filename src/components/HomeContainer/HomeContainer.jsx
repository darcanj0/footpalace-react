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
  //loggedIn
  const [loggedIn, setLoggedIn] = useState(false);
  //adminView
  const [adminView, setAdminView] = useState(false);

  const checkIfLoggedInAndIfConsumer = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    if (!userId || !token) {
      setLoggedIn(false);
    } else {
      //verificacao de autenticidade
      //se autentico, é adm ou n
      try {
        const response = await api.get(
          `/users/find-user/${localStorage.getItem("userId")}`,
          { headers: { Authorization: localStorage.getItem("token") } }
        );
        //this request will verify the user id and the user token
        setAdminView(response.data.admin);
        setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
      }
    }
  };

  useEffect(() => {
    checkIfLoggedInAndIfConsumer();
    console.log(loggedIn)
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
        <Options
          showAlert={showAlert}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
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
