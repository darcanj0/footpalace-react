import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";

import { useState } from "react";

const NewBootModal = ({
  handleShowNewBootModal,
  showNewBootModal,
  baseURL,
  showAlert,
  getAllBoots,
}) => {
  //state for the inputs in creation modal
  const [inputsValues, setInputsValues] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  const handleModalInputChange = (event, property) => {
    setInputsValues({ ...inputsValues, [property]: event.target.value });
  };

  //user clicks in create button
  const handleCreateBoot = async () => {
    const newBoot = { ...inputsValues };

    //close modal
    handleShowNewBootModal();

    const response = await fetch(`${baseURL}/boots/create-boot`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newBoot),
    });

    const createdBoot = await response.json();

    //api returns error messages
    if (createdBoot.message) {
      showAlert("error", createdBoot.message);
    } else {
      showAlert("success", "Boot successfully created!");
    }

    //restart input values only when adm hits create button
    setInputsValues({
      name: "",
      price: "",
      description: "",
      img: "",
    });

    //update the boots list
    getAllBoots();
  };

  //how to build up a modal using pre prepared modules
  return (
    showNewBootModal && (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader
            title={"Create a new boot"}
            onclick={handleShowNewBootModal}
          />
          <ModalBody>
            <div>
              <label htmlFor="bootName">Boot name</label>
              <input
                spellCheck="false"
                autoComplete="off"
                type="text"
                name="bootName"
                value={inputsValues.name}
                onChange={(e) => {
                  handleModalInputChange(e, "name");
                }}
              />
            </div>
            <div>
              <label htmlFor="bootPrice">Price (U$)</label>
              <input
                type="number"
                autoComplete="off"
                name="bootPrice"
                value={inputsValues.price}
                onChange={(e) => {
                  handleModalInputChange(e, "price");
                }}
              />
            </div>
            <div>
              <label htmlFor="bootDescription">Description</label>
              <textarea
                spellCheck="false"
                rows={3}
                cols={35}
                name="bootDescription"
                value={inputsValues.description}
                onChange={(e) => {
                  handleModalInputChange(e, "description");
                }}
              />
            </div>
            <div>
              <label htmlFor="bootImg">Image URL</label>
              <input
                spellCheck="false"
                autoComplete="off"
                type="text"
                name="bootImg"
                value={inputsValues.img}
                onChange={(e) => {
                  handleModalInputChange(e, "img");
                }}
              />
            </div>

            <button
              className="DefaultButton"
              onClick={() => {
                handleCreateBoot();
              }}
            >
              Create Boot
            </button>
          </ModalBody>
        </ModalContainer>
      </ModalOverlay>
    )
  );
};

export default NewBootModal;
