import "./Options.css";

function Options({showAlert}) {
  return (
    <div id="options">
      <button
        className="DefaultButton"
        onClick={() => {
          showAlert("error", "In development");
        }}
      >
        Sign In
      </button>
      <i
        className="bi bi-cart-plus"
        onClick={() => {
          showAlert("error", `In development...`);
        }}
      ></i>
    </div>
  );
}

export default Options;
