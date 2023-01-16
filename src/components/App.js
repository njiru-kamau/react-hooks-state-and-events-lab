import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [lightMode, setMode] = useState(true)

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = lightMode ? "App dark" : "App light"
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>light Mode</button>
        <button onClick={()=> setMode(!lightMode)}>{ lightMode ? "Light Mode" : "Dark Mode"}</button> 
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
