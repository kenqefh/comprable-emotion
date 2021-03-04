import "./CardItem.css";
import React from "react";

function CardItem({
  className,
  id,
  image,
  name,
  price,
  category,
  onCartClick,
}) {
  return (
    <article id={id} className={[className, "card-item"].join(" ")}>
      <div className="card-item__img">
        <img src={image} alt={image} />
      </div>
      <div className="card-item__info">
        <div className="card-item__desc">
          <p className="card-item__title">{name}</p>
          <p className="card-item__category">{category}</p>
        </div>
        <div>
          <p className="card-item__price">$ {price}</p>
        </div>
      </div>
      <i onClick={onCartClick} className="ri-shopping-cart-2-fill"></i>
    </article>
  );
}

export default CardItem;
