import "./Header.css";

function Header({ changeView }) {
  return (
    <div className="Header">
      <div className="Row">
        <div className="Logo">
          <img
            className="LogoIcon"
            src={require("assets/logos/footpalace.png")}
            alt="Foot Palace logo"
          />
          <span>Foot Palace</span>
        </div>
        <button className="DefaultButton" onClick={changeView}>
          View
        </button>
        <div className="Search">
          <input
            type="number"
            name="idBootSearch"
            id="idBootSearch"
            placeholder="Search a boot by Id"
          />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
