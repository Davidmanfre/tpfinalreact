import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";

const Navbar = () => {
  const categories = ["Todos", "Tecno", "Electro"];
  return (
    <div className="container-nav">
      <h3>ReactCommerce</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
