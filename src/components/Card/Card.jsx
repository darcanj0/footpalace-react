import "./Card.css";

import DeleteBootModal from "components/Modals/DeleteBootModal/DeleteBootModal";
import EditBootModal from "components/Modals/EditBootModal/EditBootModal";

import { useState } from "react";

function Card({
  img,
  name,
  price,
  description,
  identity,
  quantity,
  onAdd,
  onRemove,
  adminView,
  showAlert,
  getAllBoots,
}) {
  //delete modal logic
  const [showDeleteBootModal, setShowDeleteBootModal] = useState(false);

  const handleShowDeleteBootModal = () => {
    setShowDeleteBootModal(!showDeleteBootModal);
  };

  //edit modal logic
  const [showEditBootModal, setShowEditBootModal] = useState(false);

  const handleShowEditBootModal = () => {
    setShowEditBootModal(!showEditBootModal);
  };

  //add, remove and show how many items in each card
  const badgeCounter = (quantity) =>
    Boolean(quantity) && <span className="BootBadge">{quantity}</span>;

  const removeButton = (quantity, indentity) =>
    Boolean(quantity) && (
      <button className="ActionsTest Btns" onClick={() => onRemove(indentity)}>
        <i className="bi bi-cart-dash"></i>
      </button>
    );

  return (
    <>
      <DeleteBootModal
        handleShowDeleteBootModal={handleShowDeleteBootModal}
        showDeleteBootModal={showDeleteBootModal}
        identity={identity}
        showAlert={showAlert}
        getAllBoots={getAllBoots}
      />
      <EditBootModal
        handleShowEditBootModal={handleShowEditBootModal}
        showEditBootModal={showEditBootModal}
        identity={identity}
        showAlert={showAlert}
        getAllBoots={getAllBoots}
        name={name}
        price={price}
        description={description}
        img={img}
      />
      <div className="BootsListItem">
        <img className="BootImg" src={`${img}`} alt={name} />
        <div className="BootInfo">
          <div className="BootName">{name}</div>
          <div className="BootPrice">{`U$ ${price}`}</div>
          <div className="BootDescription">{description}</div>
          {!adminView ? (
            <div className="BootButtons Actions">
              {removeButton(quantity, identity)}
              {badgeCounter(quantity)}
              <button
                onClick={() => {
                  onAdd(identity);
                }}
                className={`ActionsAdd Btns ${quantity && "ActionsReduce"}`}
              >
                <i className="bi bi-cart-plus"></i>
              </button>
            </div>
          ) : (
            <div className="BootActions BootButtons">
              <button
                className="Btns ActionsTest"
                onClick={handleShowEditBootModal}
              >
                <i className="bi bi-pencil-square"></i>
              </button>
              <button
                className="Btns ActionsTest"
                onClick={handleShowDeleteBootModal}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
