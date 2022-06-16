import "./DeleteBootModal.css";

import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalContainer from "../ModalContainer/ModalContainer";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";

import api from "api";

const DeleteBootModal = ({
  handleShowDeleteBootModal,
  showDeleteBootModal,
  identity,
  showAlert,
  getAllBoots,
}) => {
  const handleBootDeletion = async () => {
    handleShowDeleteBootModal();
    try {
      const response = await api.delete(`/boots/delete-boot/${identity}`);
      if (response.status === 204) {
        showAlert("success", "Boot successfully deleted!");
      }
    } catch (error) {
      showAlert("error", error.response.data.message);
    }

    getAllBoots();
  };

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
            <button
              className="DeleteBootModalButtons"
              id="yes"
              onClick={() => {
                handleBootDeletion(identity);
              }}
            >
              Yes
            </button>
          </ModalBody>
        </ModalContainer>
      </ModalOverlay>
    )
  );
};

export default DeleteBootModal;
