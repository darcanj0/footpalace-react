import "./Home.css";

import Header from "./Header";
import Options from "./Options";
import BootsList from "./BootsList";

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
