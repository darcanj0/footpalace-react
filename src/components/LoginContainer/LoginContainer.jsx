import "./LoginContainer.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "api";

const LoginContainer = ({ showAlert }) => {
  let navigate = useNavigate();
  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
  });
  const handleInputsChanges = (event, field) => {
    setInputsValues({ ...inputsValues, [field]: event.target.value });
  };
  const handleLoginAttempt = async () => {
    try {
      const response = await api.post("/login", inputsValues);
      if (response.request.status === 200) {
        showAlert("success", "Welcome!");
        localStorage.setItem("token", response.data.token);
        // localStorage.setItem("token", "isso é um tokem invalido")
        localStorage.setItem("userId", response.data.userId);
        // localStorage.setItem("userId", "isso é uma id inválida");
        // localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      showAlert("error", error.response.data.message);
    }
  };
  return (
    <div className="LoginContainer">
      <div className="LoginColor">
        <img
          id="logoIcon"
          src={require("assets/logos/footpalace.png")}
          alt="Foot Palace logo"
        />
        <h1>Foot Palace</h1>
      </div>
      <div className="LoginImage"></div>
      <div className="LoginForm">
        <div className="LoginHeader">Welcome to Foot Palace!</div>
        <div className="LoginModalBody">
          <input
            type="email"
            autoComplete="false"
            required
            placeholder="User e-mail"
            value={inputsValues.email}
            onChange={(e) => {
              handleInputsChanges(e, "email");
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="User password"
            required
            value={inputsValues.password}
            onChange={(e) => {
              handleInputsChanges(e, "password");
            }}
          />
          <button onClick={handleLoginAttempt}>Sign In</button>
          <a href="" onClick={() => showAlert("error", "In development")}>
            Don't have an account yet?
          </a>
          <a href="">Forgot my password</a>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
