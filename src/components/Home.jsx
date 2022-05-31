import "./Home.css";

import Header from "./Header";
import BootsList from "./BootsList";

function Home() {
  return (
    <div className="Home">
      <div className="HomeContainer">
        <Header/>
        <BootsList />
      </div>
    </div>
  );
}

export default Home;
