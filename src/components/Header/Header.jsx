import "./Header.css";

const Header = ({
  changeView,
  searchInputValue,
  handleBootSearch,
  handleSearchInputChange,
}) => {
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
            spellCheck="false"
            type="text"
            name="idBootSearch"
            id="idBootSearch"
            placeholder="Search a boot"
            value={searchInputValue}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleBootSearch}>
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
