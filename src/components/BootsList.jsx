import React, { useState } from "react";
import "./BootsList.css";
import boots from "../mocks/boots.js";

function BootsList() {
  const [selectedBoot, setSelectedBoot] = useState({});

  // [{0:1},...]

  const addItem = (bootIndex) => {
    const boot = { [bootIndex]: Number(selectedBoot[bootIndex] || 0) + 1 };
    setSelectedBoot({ ...selectedBoot, ...boot });
  };

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
              <button className="ActionsTest Btns">
                <i class="bi bi-cart-dash"></i>
              </button>
              <span className="BootBadge"> {selectedBoot[index] || 0} </span>
              <button
                className="ActionsAdd ActionsFill Btns"
                onClick={() => addItem(index)}
              >
                <i class="bi bi-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BootsList;
