import logo from "../assets/images/pencil-alt.png";
import Button from "../components/UI/buttons/Button";
import "./Home.css";

function Home({ history }) {
  return (
    <main className="home">
      <div className="home-container">
        <img src={logo} alt="logo" />
        <h1>
          Welcome to
          <br />
          Comprable
        </h1>
        <div className="home__buttons-container">
          <Button
            title="Login"
            onPress={() => {
              history.push("login");
            }}
          />
          <Button
            title="Explore"
            onPress={() => {
              history.push("products");
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
