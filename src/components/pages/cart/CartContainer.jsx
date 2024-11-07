import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalAmount } =
    useContext(CartContext);
  let totalAmount = getTotalAmount();
  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteProductById={deleteProductById}
      total={totalAmount}
    />
  );
};

export default CartContainer;
