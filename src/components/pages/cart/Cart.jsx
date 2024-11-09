import { Button } from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

const Cart = ({ cart, clearCart, deleteProductById, total }) => {
  const limpiarConAlert = () => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar todo el carrito?",
      showConfirmButton: true,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `Me arrepentí`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        // Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        // Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

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
      {total > 0 ? (
        <Button variant="outlined" sx={{ mt: 4 }} onClick={limpiarConAlert}>
          Limpiar Carrito
        </Button>
      ) : (
        <Button
          variant="outlined"
          sx={{ mt: 4 }}
          disabled
          onClick={limpiarConAlert}
        >
          Limpiar Carrito
        </Button>
      )}
      {total > 0 ? (
        <h3>Total: ${total}</h3>
      ) : (
        <h3>No tienes elementos en el carrito</h3>
      )}
    </div>
  );
};

export default Cart;
