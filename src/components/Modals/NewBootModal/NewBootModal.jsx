import "./NewBootModal.css";

import { useState } from "react";
import { toast } from "react-hot-toast";

const NewBootModal = ({ handleShowNewBootModal, showNewBootModal }) => {
  const [inputsValues, setInputsValues] = useState({});

  return (
    showNewBootModal && (
      <div className="ModalOverlay">
        <div className="ModalContainer">
          <div className="ModalHeader">
            <span className="ModalHeaderTitle">Create a new Boot</span>
            <i
              className="bi bi-x-circle-fill"
              onClick={handleShowNewBootModal}
            ></i>
          </div>
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
        </div>
      </div>
    )
  );
};

export default NewBootModal;
