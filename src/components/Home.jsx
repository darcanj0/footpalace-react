import "./Home.css";

import Header from "./Header";
import BootsList from "./BootsList";

function Home() {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <Header />
        <h2>Avaliable Boots</h2>
        <BootsList />
      </div>
    </div>
  );
}

export default Home;
