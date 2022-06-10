import "./NewBootModal.css";

import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalHeader from "../ModalHeader/ModalHeader";

import { useState } from "react";
import { toast } from "react-hot-toast";

const NewBootModal = ({ handleShowNewBootModal, showNewBootModal }) => {
  const [inputsValues, setInputsValues] = useState({});

  return (
    showNewBootModal && (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader
            title={"Create a new boot"}
            onclick={handleShowNewBootModal}
          />
          <div className="ModalBody">
            <div>
              <label htmlFor="bootName">Name</label>
              <input type="text" name="bootName" />
            </div>
            <div>
              <label htmlFor="bootPrice">Price</label>
              <input type="number" name="bootPrice" />
            </div>
            <div>
              <label htmlFor="bootDescription">Description</label>
              <input type="textarea" name="bootDescription" />
            </div>
            <div>
              <label htmlFor="bootImg">Image</label>
              <input type="text" name="bootImg" />
            </div>

            <button className="DefaultButton">Create Boot</button>
          </div>
        </ModalContainer>
      </ModalOverlay>
    )
  );
};

export default NewBootModal;
