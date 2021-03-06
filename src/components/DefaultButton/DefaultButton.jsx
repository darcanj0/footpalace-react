import "./DefaultButton.css";

const DefaultButton = ({ children, onclick }) => {
  return (
    <button className="DefaultButton" onClick={onclick}>
      {children}
    </button>
  );
};

export default DefaultButton;
