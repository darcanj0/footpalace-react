import "./BootsList.css";

import Card from "components/Card/Card";
import DefaultButton from "components/DefaultButton/DefaultButton";
import NewBootModal from "components/Modals/NewBootModal/NewBootModal";

import React, { useState, useEffect } from "react";

const BootsList = ({
  consumerView,
  baseURL,
  showAlert,
  boots,
  setBoots,
  filteredBoots,
  setFilteredBoots,
  setSearchInputValue,
}) => {
  //boots list and find all fetch
  const getAllBoots = async () => {
    const response = await fetch(`${baseURL}/boots/find-boots`);
    const list = await response.json();
    setBoots(list);
  };

  useEffect(() => {
    getAllBoots();
  }, []);

  //state that determines whether to show the creation modal or not
  const [showNewBootModal, setShowNewBootModal] = useState(false);

  const handleShowNewBootModal = () => {
    setShowNewBootModal(!showNewBootModal);
  };

  //object with quantities that are selected by the user
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
        {filteredBoots.length === 0
          ? boots.map((elem, index) => {
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
                  baseURL={baseURL}
                  showAlert={showAlert}
                  getAllBoots={getAllBoots}
                />
              );
            })
          : filteredBoots.map((elem, index) => {
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
                  baseURL={baseURL}
                  showAlert={showAlert}
                  getAllBoots={getAllBoots}
                />
              );
            })}
      </div>
    </>
  );
};

export default BootsList;
