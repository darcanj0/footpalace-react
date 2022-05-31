import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Row">
        <div className="Logo">
          <img className="LogoIcon" src={require("../assets/images/logos/footpalace.png")} alt="" />
          <span>Foot Palace</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
