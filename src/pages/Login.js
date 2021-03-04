import LoginForm from "../components/UI/forms/LoginForm";
import "../components/UI/forms/AddForm.css";
import { Redirect } from "react-router-dom";

function Login() {
  if (sessionStorage.getItem("token")) {
    return <Redirect to="/products" />;
  }
  return (
    <>
      <header className="main-header">
        <h2>Login</h2>
      </header>
      <LoginForm />
    </>
  );
}

export default Login;
