import "./Home.css";

import Header from "components/Header/Header";
import Options from "components/Options/Options";
import BootsList from "components/BootsList/BootsList";

function Home() {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <Header />
        <Options />
        <BootsList />
      </div>
    </div>
  );
}

export default Home;
