import "./HomeContainer.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";
import Footer from "components/Footer/Footer";

import { useState } from "react";

const HomeContainer = () => {
  const [consumerView, setConsumerView] = useState();

  const handleChangeView = () => {
    setConsumerView(!consumerView);
  };

  return (
    <div className="HomeContainer">
      <Header changeView={handleChangeView} />
      {consumerView && <Options />}
      <BootsList consumerView={consumerView} />
      <Footer />
    </div>
  );
};

export default HomeContainer;
