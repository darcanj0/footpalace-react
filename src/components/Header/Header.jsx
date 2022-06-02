import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Row">
        <div className="Logo">
          <img
            className="LogoIcon"
            src={require("assets/logos/footpalace.png")}
            alt=""
          />
          <span>Foot Palace</span>
        </div>
        <div className="Search">
          <input
            type="number"
            name="idBootSearch"
            id="idBootSearch"
            placeholder="Search a boot by Id"
          />
          <button>
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
