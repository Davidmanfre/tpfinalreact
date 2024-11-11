import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../../ProductsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../../config-firebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const { id } = useParams(); // Get the id from the URL

  let totalItems = getTotalQuantityById(id);

  useEffect(() => {
    let productCollection = collection(db, "productos");
    let refDoc = doc(productCollection, id);
    let getProduct = getDoc(refDoc);
    getProduct.then((res) => setItem({ ...res.data(), id: res.id }));
  }, [id]);

  const onAdd = (quantity) => {
    let productoParaElCarrito = { ...item, quantity };
    addToCart(productoParaElCarrito); // Add the item to the cart using the CartContext's addToCart method
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default ItemDetailContainer;

// let product = products.find((product) => product.id === id);
// if (product) {
//   setItem(product);
// }
