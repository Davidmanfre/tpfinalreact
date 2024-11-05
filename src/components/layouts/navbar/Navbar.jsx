import CartWidget from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { categories } from "./categories";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-nav">
      <Link to={"/"}>ReactCommerce</Link>
      <ul>
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
