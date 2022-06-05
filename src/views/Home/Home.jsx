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
        <h2>Avaliable Boots</h2>
        <button className="DefaultButton" id="listAll">List all Boots</button>
        <BootsList />
      </div>
    </div>
  );
}

export default Home;