import { Button } from "@mui/material";
import { useState } from "react";

const Counter = ({ onAdd, stock }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <Button onClick={sumar} disabled={contador >= stock}>
        Sumar
      </Button>
      <h1>{contador} </h1>
      <Button onClick={restar}>Restar</Button>
      <Button variant="contained" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;
