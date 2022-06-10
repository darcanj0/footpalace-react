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
  const [inputsValues, setInputsValues] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  const handleModalInputChange = (event, property) => {
    setInputsValues({ ...inputsValues, [property]: event.target.value });
  };

  const handleCreateBoot = async () => {
    const newBoot = { ...inputsValues };

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

    if (createdBoot.message) {
      showAlert("error", createdBoot.message);
    } else {
      showAlert("success", "Boot successfully created!");
    }

    setInputsValues({
      name: "",
      price: "",
      description: "",
      img: "",
    });

    getAllBoots();
  };

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
              <label htmlFor="bootName">Name</label>
              <input
                type="text"
                name="bootName"
                value={inputsValues.name}
                onChange={(e) => {
                  handleModalInputChange(e, "name");
                }}
              />
            </div>
            <div>
              <label htmlFor="bootPrice">Price</label>
              <input
                type="number"
                name="bootPrice"
                value={inputsValues.price}
                onChange={(e) => {
                  handleModalInputChange(e, "price");
                }}
              />
            </div>
            <div>
              <label htmlFor="bootDescription">Description</label>
              <input
                type="textarea"
                name="bootDescription"
                value={inputsValues.description}
                onChange={(e) => {
                  handleModalInputChange(e, "description");
                }}
              />
            </div>
            <div>
              <label htmlFor="bootImg">Image</label>
              <input
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
