import React, { useState } from "react";

function Item({ name, category }) {
  const [toCart, sendToCart] = useState("");

  function handleAddToCart() {
    sendToCart(toCart === "" ? "in-cart" : "");
  }

  return (
    <li className={toCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {toCart === "" ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
