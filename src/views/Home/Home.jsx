import "./Home.css";

import HomeContainer from "components/HomeContainer/HomeContainer";
import { toast } from "react-hot-toast";

function Home() {
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
      <HomeContainer showAlert={showAlert} />
    </div>
  );
}

export default Home;
