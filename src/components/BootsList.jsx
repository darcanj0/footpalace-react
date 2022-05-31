import "./BootsList.css";

function BootsList() {
  return (
    <>
      <div className="BootsList">
        <div className="BootsListItem">
          <img
            className="BootImg"
            src={require("../assets/images/mercurial-light-blue.png")}
            alt=""
          />
          <div className="BootInfo">
            <div className="BootName">Nike Mercurial Vapor 14 Elite</div>
            <div className="BootPrice">U$ 169.99</div>
            <div className="BootDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="BootButtons Actions">
              <button className="ActionsAdd ActionsFill Btns">
                Add to cart
              </button>
              <button className="ActionsTest Btns">Edit?</button>
            </div>
          </div>
        </div>

        <div className="BootsListItem">
          <img
            className="BootImg"
            src={require("../assets/images/tiempo-red.png")}
            alt=""
          />
          <div className="BootInfo">
            <div className="BootName">Nike Mercurial Vapor 14 Elite</div>
            <div className="BootPrice">U$ 169.99</div>
            <div className="BootDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="BootButtons Actions">
              <button className="ActionsAdd ActionsFill Btns">
                Add to cart
              </button>
              <button className="ActionsTest Btns">Edit?</button>
            </div>
          </div>
        </div>

        <div className="BootsListItem">
          <img
            className="BootImg"
            src={require("../assets/images/phantom-green.png")}
            alt=""
          />
          <div className="BootInfo">
            <div className="BootName">Nike Mercurial Vapor 14 Elite Pro</div>
            <div className="BootPrice">U$ 169.99</div>
            <div className="BootDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="BootButtons Actions">
              <button className="ActionsAdd ActionsFill Btns">
                Add to cart
              </button>
              <button className="ActionsTest Btns">Edit?</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BootsList;
