import "assets/styles/main.css";

import Home from "views/Home/Home";

import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Home />;
    </>
  );
};

export default App;
