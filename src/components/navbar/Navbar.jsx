import "./navbar.css";

import logo from "../../assets/LG.png";

export const Navbar = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <img src="/public/carrito-de-compras.png" alt="" />
      <h1 className="title">Nombre</h1>
      <ul>
        <li>Todas</li>
        <li>urbanas</li>
        <li>deportivas</li>
      </ul>
    </div>
  );
};
