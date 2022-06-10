import "./DeleteBootModal.css";

import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";

const DeleteBootModal = ({
  handleShowDeleteBootModal,
  showDeleteBootModal,
}) => {
  return (
    showDeleteBootModal && (
      <ModalOverlay>
        <ModalContainer>
          <ModalHeader
            title={"Delete boot"}
            onclick={handleShowDeleteBootModal}
          />
          <ModalBody>
            <h3>Do you really want to delete this boot?</h3>
            <button className="DeleteBootModalButtons" id="yes">
              Yes
            </button>
          </ModalBody>
        </ModalContainer>
      </ModalOverlay>
    )
  );
};

export default DeleteBootModal;
