import ProductCard from "../../common/productCard/ProductCard";
import "./itemListContainer.css";
import { products } from "../../../ProductsMock";
import { useEffect } from "react";
import Itemlist from "./Itemlist";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.categoria === categoryName
    );
    const getProducts = new Promise((resolve, reject) => {
      let isLogued = true;
      if (isLogued) {
        resolve(categoryName ? filteredProducts : products);
      } else {
        reject("Not logged in");
      }
    });
    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {});
  }, [categoryName]);

  return <Itemlist items={items} />;
};

export default ItemListContainer;
