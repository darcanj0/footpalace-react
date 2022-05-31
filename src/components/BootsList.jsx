import "./BootsList.css";
import boots from "../mocks/boots.js";

function BootsList() {
  return (
    <div className="BootsList">
      {boots.map((boot, index) => (
        <div className="BootsListItem">
          <img className="BootImg" src={boot.img} alt={boot.name} />
          <div className="BootInfo">
            <div className="BootName">{boot.name}</div>
            <div className="BootPrice">{`U$ ${boot.price}`}</div>
            <div className="BootDescription">{boot.description}</div>
            <div className="BootButtons Actions">
              <button className="ActionsAdd ActionsFill Btns">
                + Add to cart
              </button>
              {/* <button className="ActionsTest Btns">Edit?</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BootsList;
