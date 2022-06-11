import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";
import { useState } from "react";

const EditBootModal = ({
  showEditBootModal,
  handleShowEditBootModal,
  baseURL,
  showAlert,
  getAllBoots,
  identity,
  name,
  price,
  description,
  img,
}) => {
  const [inputsValues, setInputsValues] = useState({
    name,
    price,
    description,
    img,
  });

  const handleModalInputChange = (event, property) => {
    setInputsValues({ ...inputsValues, [property]: event.target.value });
  };

  const handleEditBoot = async () => {
    const newBoot = { ...inputsValues };

    handleShowEditBootModal();

    const response = await fetch(`${baseURL}/boots/update-boot/${identity}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newBoot),
    });

    const editedBoot = await response.json();

    if (editedBoot.message) {
      showAlert("error", editedBoot.message);
    } else {
      showAlert("success", "Boot successfully edited!");
    }

    getAllBoots();
  };

  return (
    showEditBootModal && (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader title={"Update boot"} onclick={handleShowEditBootModal} />
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
                autoComplete="off"
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
              <textarea
                name="bootDescription"
                cols="35"
                rows="3"
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
            <button className="DefaultButton" onClick={handleEditBoot}>
              Update Boot
            </button>
          </ModalBody>
        </ModalContainer>
      </ModalOverlay>
    )
  );
};

export default EditBootModal;
