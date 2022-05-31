import "./BootsList.css";

function BootsList() {
  return (
    <section className="BootsList">
      <div className="BootsListItem">
        <img
          className="BootImg"
          src={require("../assets/images/tiempo-red.png")}
          alt=""
        />
        <div className="BootInfo">
          <div className="BootName">Nike Mercurial Vapor 14 Elite</div>
          <div className="`BootPrice">169.99</div>
          <div className="BootDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="BootButtons Actions">
            <button className="ActionsAdd ActionsFill"></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BootsList;
