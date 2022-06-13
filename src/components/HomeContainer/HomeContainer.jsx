import "./HomeContainer.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";
import Footer from "components/Footer/Footer";

import { useState } from "react";

const HomeContainer = ({showAlert}) => {
  //bootsList
  const [boots, setBoots] = useState([]);

  //search system
  const [searchInputValue, setSearchInputValue] = useState("");
  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  //toggle between adm and user vew
  const [consumerView, setConsumerView] = useState(true);
  const handleChangeView = () => {
    setConsumerView(!consumerView);
  };

  //baseURL variable
  const baseURL = "http://localhost:3001";

  return (
    <div className="HomeContainer">
      <Header
        changeView={handleChangeView}
        handleSearchInputChange={handleSearchInputChange}
        searchInputValue={searchInputValue}
      />
      {consumerView && <Options showAlert={showAlert} />}
      <BootsList
        consumerView={consumerView}
        baseURL={baseURL}
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
