import { useState } from "react";
import "./LoginForm.css";
import "../buttons/Button";
import SessionsService from "../../../services/sessions_service";
import { Link, useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isValidUsername = () => {
    return username.length >= 3;
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const sessionsService = new SessionsService();
        const session = await sessionsService.login(username, password);
        sessionStorage.setItem("token", session.token);
        history.push("products");
      }}
      className="login-form"
    >
      <div className="login-form__field">
        <label>Username</label>
        <input
          required
          className={isValidUsername() ? "" : "error"}
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
      </div>
      <div className="login-form__field">
        <label>Password</label>
        <input
          required
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>
      <footer className="login-form__footer">
        <button type="submit" className="button home-button">
          Login
        </button>
        <Link className="link" to="sign-up">
          Register
        </Link>
        <Link className="link" to="/">
          Cancel
        </Link>
      </footer>
    </form>
  );
}

export default LoginForm;
