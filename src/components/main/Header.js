import "./Header.css";

function Header({ onClick, setRoute }) {
  return (
    <header className="main-header">
      <h2>Pending Todos</h2>
      <div className="main-header__options">
        <a
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
          className="link"
          href="#options"
        >
          Options
        </a>
        <a onClick={() => setRoute("home")} href="#home">
          <i className="ri-home-8-line"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
