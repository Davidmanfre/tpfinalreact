import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";
import { products } from "../../../ProductsMock";
import { useEffect } from "react";
import Itemlist from "./Itemlist";
import { useState } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      resolve(products);
    });
    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {});
  }, []);

  return <Itemlist items={items} />;
};

export default ItemListContainer;
