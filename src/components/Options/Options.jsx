import "./Options.css";

import { toast } from "react-hot-toast";

function Options() {
  const showAlert = (type, message) => {
    if (type === "error") {
      toast.error(message, {
        iconTheme: {
          primary: "#a52a2a",
          secondary: "#fff",
        },
        style: { background: "#333", color: "#fff" },
      });
    } else if (type === "success") {
      toast.success(message, {
        iconTheme: {
          primary: "#2AA52A",
          secondary: "#fff",
        },
        style: { background: "#333", color: "#fff" },
      });
    }
  };

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
