import "./Header.css";

const Header = ({
  searchInputValue,
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
        <div className="Search">
          <input
            spellCheck="false"
            autoComplete="off"
            type="text"
            name="idBootSearch"
            id="idBootSearch"
            placeholder="Search a boot"
            value={searchInputValue}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
