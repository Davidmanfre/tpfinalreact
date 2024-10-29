import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";

const Itemlist = ({ items }) => {
  return (
    <div className="Itemlist">
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Itemlist;
