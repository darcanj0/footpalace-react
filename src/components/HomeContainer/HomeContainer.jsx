import "./HomeContainer.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";
import Footer from "components/Footer/Footer";

import { useState } from "react";
import { toast } from "react-hot-toast";

const HomeContainer = () => {
  const [consumerView, setConsumerView] = useState();

  const handleChangeView = () => {
    setConsumerView(!consumerView);
  };

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

  const baseURL = "http://localhost:3001";

  return (
    <div className="HomeContainer">
      <Header changeView={handleChangeView} />
      {consumerView && <Options showAlert={showAlert} />}
      <BootsList consumerView={consumerView} baseURL={baseURL} showAlert={showAlert} />
      <Footer />
    </div>
  );
};

export default HomeContainer;
