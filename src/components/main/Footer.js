import "./Footer.css";

function Footer({ className, goto }) {
  const homeButton = (
    <button onClick={() => goto("home")}>
      <i className="ri-home-2-fill"></i>
      <p>Home</p>
    </button>
  );

  const cartButton = (
    <button onClick={() => goto("cart")}>
      <i className="ri-shopping-cart-2-fill"></i>
      <p>Cart</p>
    </button>
  );

  const logoutButton = (
    <button onClick={() => goto("logout")}>
      <i className="ri-user-3-fill"></i>
      <p>Logout</p>
    </button>
  );

  return (
    <footer className={[className, "main-footer"].join(" ")}>
      <div className="container">
        {homeButton}
        {cartButton}
        {sessionStorage.getItem("token") && logoutButton}
      </div>
    </footer>
  );
}

export default Footer;
