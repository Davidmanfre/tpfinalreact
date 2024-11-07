import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  const clearCart = (product) => {
    setCart([]);
  };
  const deleteProductById = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const getTotalAmount = () => {
    let totalCarrito = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return totalCarrito;
  };
  //funcion que me diga el total de productos del carrito
  const getTotalItems = () => {};

  let data = { cart, addToCart, clearCart, deleteProductById, getTotalAmount };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
