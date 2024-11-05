import { Button } from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={sumar}>Sumar</button>
      <h1>{contador} </h1>
      <button onClick={restar}>Restar</button>
      <Button variant="contained">Agregar al carrito</Button>
    </div>
  );
};

export default Counter;
