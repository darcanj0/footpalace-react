import "./DefaultButton.css";

const DefaultButton = ({ children, onclick }) => {
  return (
    <button className="DefaultButton" onclick={onclick}>
      {children}
    </button>
  );
};

export default DefaultButton;
