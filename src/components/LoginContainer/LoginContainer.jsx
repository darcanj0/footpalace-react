import "./LoginContainer.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "api";

const LoginContainer = ({
  showAlert,
  userCreationMode,
  handleUserCreationMode,
}) => {
  let navigate = useNavigate();
  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
    name: "",
    adminPass: "",
  });
  const handleInputsChanges = (event, field) => {
    setInputsValues({ ...inputsValues, [field]: event.target.value });
  };
  const handleUserCreation = async () => {
    try {
      const response = await api.post("/users/create-user", inputsValues);
      if (response.request.status === 201) {
        showAlert("success", "Your account has been created!");
        setInputsValues({
          email: "",
          password: "",
          name: "",
          adminPass: "",
        });
        handleUserCreationMode();
      }
    } catch (error) {
      showAlert("error", error.response.data.message);
    }
  };
  const handleLoginAttempt = async () => {
    const loginInfo = {
      email: inputsValues.email,
      password: inputsValues.password,
    };
    try {
      const response = await api.post("/login", loginInfo);
      if (response.request.status === 200) {
        showAlert("success", "Welcome!");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
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
            placeholder={
              userCreationMode ? "Create your password" : "User password"
            }
            required
            value={inputsValues.password}
            onChange={(e) => {
              handleInputsChanges(e, "password");
            }}
          />
          {userCreationMode ? (
            <>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                required
                value={inputsValues.name}
                onChange={(e) => {
                  handleInputsChanges(e, "name");
                }}
              />
              <input
                type="password"
                name="adminPass"
                placeholder="Adm pass ( for managers )"
                value={inputsValues.adminPass}
                onChange={(e) => {handleInputsChanges(e, "adminPass")}}
              />
              <button onClick={handleUserCreation}>Create Account</button>
              <a onClick={handleUserCreationMode}>Go back</a>
            </>
          ) : (
            <>
              <button onClick={handleLoginAttempt}>Sign In</button>
              <a onClick={handleUserCreationMode}>Don't have an account yet?</a>
              <a onClick={() => showAlert("error", "In development")}>
                Forgot my password
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
