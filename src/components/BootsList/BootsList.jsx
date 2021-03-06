import "./BootsList.css";

import Card from "components/Card/Card";
import DefaultButton from "components/DefaultButton/DefaultButton";
import NewBootModal from "components/Modals/NewBootModal/NewBootModal";

import React, { useState, useEffect } from "react";
import api from "api";

const BootsList = ({
  adminView,
  showAlert,
  boots,
  setBoots,
  searchInputValue,
  setSearchInputValue,
}) => {
  //boots list and find all fetch
  const getAllBoots = async () => {
    try {
      const response = await api.get("/boots/find-boots");
      setBoots(response.data);
    } catch (error) {
      //shows message that comes from api
      showAlert("error", error.response.data.message);
    }
    setSearchInputValue("");
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
        showAlert={showAlert}
        getAllBoots={getAllBoots}
      />
      <div
        className="ButtonsContainer"
        style={{ marginTop: adminView ? "100px" : "0px" }}
      >
        <DefaultButton onclick={getAllBoots}>List All Boots</DefaultButton>
        {adminView && (
          <DefaultButton onclick={handleShowNewBootModal}>
            Add new Boot
          </DefaultButton>
        )}
      </div>
      <div className="BootsList">
        {searchInputValue === ""
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
                  adminView={adminView}
                  showAlert={showAlert}
                  getAllBoots={getAllBoots}
                />
              );
            })
          : boots
              .filter((elem) => {
                return elem.name
                  .toLowerCase()
                  .includes(searchInputValue.toLowerCase());
              })
              .map((elem) => {
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
                    adminView={adminView}
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
