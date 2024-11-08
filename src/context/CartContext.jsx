import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);

    if (existe) {
      let nuevoArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return { ...elemento, quantity: product.quantity };
        }
        return elemento;
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, product]);
    }
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
  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalAmount,
    getTotalItems,
    getTotalQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
