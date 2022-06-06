import "./HomeContainer.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <Header />
      <Options />
      <BootsList />
    </div>
  );
};

export default HomeContainer;
