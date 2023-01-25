import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [lightMode, setMode] = useState(true);

  const appClass = lightMode ? "App light" : "App dark";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setMode(!lightMode)}>
          {lightMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
