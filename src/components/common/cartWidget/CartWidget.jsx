import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="carrito">
      <Badge
        badgeContent={cart.length}
        color="primary"
        max={10}
        showZero={true}
      >
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
