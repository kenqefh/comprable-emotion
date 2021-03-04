import Button from "../../components/UI/buttons/Button.js";
import OrdersService from "../../services/orders_service";
import CartItem from "../cart/CartItem.js";
import "./Cart.css";

const Cart = ({ goto, cartItems, updateProduct, onSuccess }) => {
  const cartItemsKeys = Object.keys(cartItems);

  const getTotal = () =>
    cartItemsKeys.reduce((total, key) => {
      const item = cartItems[key];
      console.log(item);
      return total + item.product.price * item.quantity;
    }, 0);

  return (
    <>
      <div className="cart__header">
        <p className="cart__header_title">Cart</p>
      </div>

      <div className="cart__items">
        {cartItemsKeys.map((key) => {
          const item = cartItems[key];
          const { quantity, product } = item;
          return (
            <CartItem
              key={key}
              id={key}
              product={product}
              quantity={quantity}
              updateProduct={updateProduct}
            />
          );
        })}
      </div>
      <p>Total Amount: ${getTotal()}</p>
      <Button
        title="Create your order"
        onPress={() => {
          if (cartItemsKeys.length <= 0) {
            return alert("Order should have at least one item to be sent");
          }
          if (!localStorage.getItem("token")) {
            alert("You must login before checkout");
            return goto("login");
          }
          const ordersService = new OrdersService();
          ordersService.create(
            Object.values(cartItems).map((item) => ({
              productId: item.product.id,
              quantity: item.quantity,
            }))
          );
          onSuccess();
        }}
      />
    </>
  );
};

export default Cart;
