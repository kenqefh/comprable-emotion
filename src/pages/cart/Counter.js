import "./Counter.css";

function Counter({ id, quantity, updateProduct }) {
  return (
    <div className="counter">
      <button onClick={() => updateProduct(id, quantity - 1)}>
        <i class="ri-indeterminate-circle-line"></i>
      </button>
      <span>{quantity}</span>
      <button onClick={() => updateProduct(id, quantity + 1)}>
        <i class="ri-add-circle-line"></i>
      </button>
    </div>
  );
}

export default Counter;
