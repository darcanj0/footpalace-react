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
  const [filteredBoots, setFilteredBoots] = useState([]);
  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };
  const handleBootSearch = () => {
    if (searchInputValue === "") {
      return showAlert("error", "No results found");
    }
    setSearchInputValue("");
    document.getElementById("idBootSearch").value = "";
    setFilteredBoots(
      boots.filter((boot) => {
        return boot.name.toLowerCase().includes(searchInputValue.toLowerCase());
      })
    );
    if (filteredBoots.length === 0) {
      showAlert("error", "No results found!");
    }
  };

  //toggle between adm and user vew
  const [consumerView, setConsumerView] = useState();
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
        handleBootSearch={handleBootSearch}
        handleSearchInputChange={handleSearchInputChange}
      />
      {consumerView && <Options showAlert={showAlert} />}
      <BootsList
        consumerView={consumerView}
        baseURL={baseURL}
        showAlert={showAlert}
        filteredBoots={filteredBoots}
        setFilteredBoots={setFilteredBoots}
        boots={boots}
        setBoots={setBoots}
      />
      <Footer />
    </div>
  );
};

export default HomeContainer;
