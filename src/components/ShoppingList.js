import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items)}

  function handleFilterChange(event){
    let selected= event.target.value;    
    const newItems= items.filter(item=>item.category===selected);
    setSelectedCategory(newItems)
  }
    return (
    <div className="ShoppingList">
      <div className="Filter">
      <select name="filter" onChange={handleFilterChange}>
          <option value="all">Filter by category</option>
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>
      <div>
      <ul className="items">
      {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>



export default ShoppingList;




