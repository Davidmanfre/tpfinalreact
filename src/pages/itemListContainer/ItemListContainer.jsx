import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";

const ItemListContainer = () => {
  return (
    <div>
      <h2>Listado de Productos</h2>
      <div>
        <ProductCard titulo="Tv Samsung" precio={3500} />
      </div>
    </div>
  );
};

export default ItemListContainer;
