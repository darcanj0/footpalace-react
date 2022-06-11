import "./HomeContainer.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";
import Footer from "components/Footer/Footer";

import { useState } from "react";
import { toast } from "react-hot-toast";

const HomeContainer = () => {
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
