import { Button } from "@mui/material";
import React from "react";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>Titulo:{product.title}</h2>
          <h3>Precio: ${product.price}</h3>
          <p>Cantidad: {product.quantity}</p>
          <p>Subtotal: ${product.price * product.quantity}</p>
          <Button
            variant="outlined"
            onClick={() => deleteProductById(product.id)}
          >
            Eliminar
          </Button>
        </div>
      ))}
      ;
      <Button variant="outlined" sx={{ mt: 4 }} onClick={clearCart}>
        Limpiar Carrito
      </Button>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
