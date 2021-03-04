import RegistrationForm from "./../components/UI/forms/RegistrationForm";
import "./Register.css";

function Register() {
  return (
    <main className="register">
      <div className="register-title__contaniner">
        <h2 className="title-register">Register</h2>
      </div>
      <RegistrationForm />
    </main>
  );
}

export default Register;
