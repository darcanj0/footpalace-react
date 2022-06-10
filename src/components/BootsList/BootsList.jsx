import "./BootsList.css";

import Card from "components/Card/Card";
import DefaultButton from "components/DefaultButton/DefaultButton";
import NewBootModal from "components/Modals/NewBootModal/NewBootModal";

import React, { useState, useEffect } from "react";

const BootsList = ({ consumerView, baseURL, showAlert }) => {
  const [boots, setBoots] = useState([]);
  const getAllBoots = async () => {
    const response = await fetch(`${baseURL}/boots/find-boots`);
    const list = await response.json();
    setBoots(list);
  };

  useEffect(() => {
    getAllBoots();
  }, []);

  const [showNewBootModal, setShowNewBootModal] = useState(true);

  const handleShowNewBootModal = () => {
    setShowNewBootModal(!showNewBootModal);
  };

  const [bootsSelection, setBootsSelection] = useState({});

  const addItem = (bootId) => {
    const boot = { [bootId]: Number(bootsSelection[bootId] || 0) + 1 };
    setBootsSelection({ ...bootsSelection, ...boot });
  };

  const removeItem = (bootId) => {
    const boot = { [bootId]: Number(bootsSelection[bootId] || 0) - 1 };
    setBootsSelection({ ...bootsSelection, ...boot });
  };

  return (
    <>
      <NewBootModal
        handleShowNewBootModal={handleShowNewBootModal}
        showNewBootModal={showNewBootModal}
        baseURL={baseURL}
        showAlert={showAlert}
        getAllBoots={getAllBoots}
      />
      <div
        className="ButtonsContainer"
        style={{ marginTop: consumerView ? "0px" : "100px" }}
      >
        <DefaultButton onclick={getAllBoots}>List All Boots</DefaultButton>
        {!consumerView && (
          <DefaultButton onclick={handleShowNewBootModal}>
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
