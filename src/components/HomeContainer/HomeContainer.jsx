import "./HomeContainer.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";
import Footer from "components/Footer/Footer";

const HomeContainer = () => {
  let consumerView = true;

  return (
    <div className="HomeContainer">
      <Header />
      {consumerView && <Options />}
      <BootsList consumerView={consumerView} />
      <Footer />
    </div>
  );
};

export default HomeContainer;
