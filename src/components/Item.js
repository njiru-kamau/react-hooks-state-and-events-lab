import React from "react";
import React, {useState} from "react";

function Item({ name, category }) {
  const [toCart, sendToCart] = useState("")

  function handleAddToCart(){
    if (toCart === ""){
      sendToCart("in-cart")
    }
    else sendToCart("")


  }

const cartOption = toCart ==="" ? "Add to Cart" : "Remove From Cart";
  return (
    <li className={toCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
      <button className="add" onClick={handleAddToCart}>{cartOption}</button>
    </li>
  );
}

export default Item;