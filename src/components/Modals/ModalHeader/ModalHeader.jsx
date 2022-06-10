import "./ModalHeader.css";

const ModalHeader = ({ title, onclick }) => {
  return (
    <div className="ModalHeader">
      <span className="ModalHeaderTitle">{title}</span>
      <i className="bi bi-x-circle-fill" onClick={onclick}></i>
    </div>
  );
};

export default ModalHeader;
