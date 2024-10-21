import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <div className="carrito">
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
