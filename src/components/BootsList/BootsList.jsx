import "./BootsList.css";

import Card from "components/Card/Card";
import DefaultButton from "components/DefaultButton/DefaultButton";

import React, { useState, useEffect } from "react";

const BootsList = ({ consumerView }) => {
  const baseURL = "http://localhost:3001/boots";

  const [boots, setBoots] = useState([]);
  const getAllBoots = async () => {
    const response = await fetch(`${baseURL}/find-boots`);
    const list = await response.json();
    setBoots(list);
  };

  // estado: montagem
  useEffect(() => {
    getAllBoots();
  }, []);

  const [bootsSelection, setBootsSelection] = useState({});

  const addItem = (bootId) => {
    const boot = { [bootId]: Number(bootsSelection[bootId] || 0) + 1 };
    setBootsSelection({ ...bootsSelection, ...boot });
  };

  const removeItem = (bootId) => {
    const boot = { [bootId]: Number(bootsSelection[bootId] || 0) - 1 };
    setBootsSelection({ ...bootsSelection, ...boot });
  };

  const openCreationModal = () => {};

  return (
    <>
      <div
        className="ButtonsContainer"
        style={{ marginTop: consumerView ? "0px" : "100px" }}
      >
        <DefaultButton onclick={getAllBoots}>List All Boots</DefaultButton>
        {!consumerView && (
          <DefaultButton onclick={openCreationModal}>
            Add new Boot
          </DefaultButton>
        )}
      </div>
      <div className="BootsList">
        {boots.map((elem, index) => {
          return (
            <Card
              name={elem.name}
              description={elem.description}
              img={elem.img}
              price={elem.price}
              key={elem._id}
              identity={elem._id}
              quantity={bootsSelection[elem._id]}
              onAdd={addItem}
              onRemove={removeItem}
              consumerView={consumerView}
            />
          );
        })}
      </div>
    </>
  );
};

export default BootsList;
