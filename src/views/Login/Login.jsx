import LoginContainer from "components/LoginContainer/LoginContainer";
import { toast } from "react-hot-toast";

const Login = () => {
  //show alert function
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
    <div className="Home">
      <LoginContainer showAlert={showAlert} />
    </div>
  );
};

export default Login;
