import { useEffect, useState } from "react";
import OrderSuccess from "./main/OrderSuccess";
import Cart from "./main/Cart.js";
import Footer from "../components/main/Footer";
import Categories from "./main/Categories";
import ProductsService from "../services/products_service";
import SessionsService from "../services/sessions_service";
import "./Main.css";

function Main({ goto, match, location }) {
  const [route, setRoute] = useState("main");
  const [products, setProducts] = useState([]);
  const [cart, updateCart] = useState({});

  const updateProduct = (key, quantity) => {
    const item = { ...cart[key] };
    item.quantity = quantity;
    if (item.quantity <= 0) {
      const { [key]: removed, ...newCart } = cart;
      updateCart(newCart);
    } else {
      updateCart({ ...cart, [key]: item });
    }
  };

  const buyProduct = (product) => {
    alert(`${product.name} added to your cart`);
    if (cart[product.id]) {
      updateCart({
        ...cart,
        [product.id]: {
          product,
          quantity: cart[product.id].quantity + 1,
        },
      });
    } else {
      updateCart({ ...cart, [product.id]: { product, quantity: 1 } });
    }
  };

  useEffect(() => {
    async function fetchProducts() {
      const productsService = new ProductsService();
      const products = await productsService.list();
      setProducts(products);
    }
    fetchProducts();
  }, []);

  let currentSection = null;

  switch (route) {
    case "cart":
      currentSection = (
        <Cart
          goto={goto}
          cartItems={cart}
          updateProduct={updateProduct}
          onSuccess={() => {
            updateCart({});
            setRoute("success");
          }}
        />
      );
      break;
    case "success":
      currentSection = <OrderSuccess />;
      break;
    default:
      currentSection = <Categories products={products} onBuy={buyProduct} />;
  }

  return (
    <div className="main">
      {currentSection}
      <Footer
        goto={async (target) => {
          if (target === "logout") {
            const sessionsService = new SessionsService();
            await sessionsService.logout();
            sessionStorage.removeItem("token");
            return goto("login");
          }
          setRoute(target);
        }}
        className="main__footer"
      />
    </div>
  );
}

export default Main;
