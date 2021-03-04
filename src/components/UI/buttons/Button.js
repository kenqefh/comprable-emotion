function Button({ onPress, title }) {
  return (
    <button onClick={onPress} className="button home-button">
      {title}
    </button>
  );
}

export default Button;
