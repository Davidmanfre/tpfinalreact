import { useState } from "react";
import Counter from "./components/common/counter/Counter";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartContainer";

function App() {
  return (
    <div>
      <Navbar />;
      <ItemListContainer />;
      <CartContainer />;
    </div>
  );
}

export default App;
