import { Link, useHistory } from "react-router-dom";
import UsersService from "../../../services/users_service";
import "./RegistrationForm.css";

function RegistrationForm() {
  const history = useHistory();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const { username, password, birthdate, gender } = e.target;
        const usersService = new UsersService();
        const createdUser = await usersService.create(
          username.value,
          password.value,
          birthdate.value,
          gender.value
        );
        sessionStorage.setItem("token", createdUser.token);
        history.push("products");
      }}
      className="form-register"
    >
      <div className="form-register__container">
        <div className="add-form__field">
          <label>Username</label>
          <input name="username" placeholder="Username" />
        </div>
        <div className="add-form__field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <div className="add-form__field">
          <label>Birthdate</label>
          <input type="date" name="birthdate" placeholder="Birthdate" />
        </div>
        <div className="register-form__option">
          <span>Gender</span>
          <div className="register-form__option--options">
            <div>
              <input value="male" name="gender" type="radio" />
              <label>Male</label>
            </div>
            <div>
              <input value="female" name="gender" type="radio" />
              <label>Female</label>
            </div>
            <div>
              <input value="other" name="gender" type="radio" />
              <label>Other</label>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons-registers">
        <button className="button-register" type="submit">
          Register
        </button>
        <Link to="login" className="link">
          Login
        </Link>
      </div>
    </form>
  );
}

export default RegistrationForm;
