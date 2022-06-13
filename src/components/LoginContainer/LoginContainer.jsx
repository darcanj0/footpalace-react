import "./LoginContainer.css";

const LoginContainer = ({showAlert}) => {
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
          />
          <input
            type="password"
            name="password"
            placeholder="User password"
            required
          />
          <button>Sign In</button>
          <a href="" onClick={() => showAlert("error", "In development")}>Don't have an account yet?</a>
          <a href="">Forgot my password</a>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
