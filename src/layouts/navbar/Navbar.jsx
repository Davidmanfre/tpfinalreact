import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container-nav">
      <h3>ReactCommerce</h3>
      <ul>
        <li>Todos</li>
        <li>Tecnologia</li>
        <li>Electro</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
