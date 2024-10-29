import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./cartWidget.css";

const CartWidget = () => {
  return (
    <div className="carrito">
      <Badge badgeContent={0} color="primary" max={10} showZero={true}>
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
