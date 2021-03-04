import "./CartItem.css";
import Counter from "./Counter";

function CartItem({ id, product, quantity, updateProduct }) {
  const getSubtotal = () => product.price * quantity;
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <p className="cart-item__name">{product.name}</p>
        <p className="cart-item__category">{product.category}</p>
        <p className="cart-item__price">$ {product.price}</p>
      </div>
      <Counter id={id} quantity={quantity} updateProduct={updateProduct} />
      <p className="cart-item__subtotal">$ {getSubtotal(product)}</p>
    </div>
  );
}

export default CartItem;
