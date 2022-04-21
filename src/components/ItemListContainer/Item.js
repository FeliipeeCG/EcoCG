import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
import db from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
function Item({ item: { nombre, precio, imagen, id, stock } }) {
  const { cartProducts, addProductCart } = useContext(CartContext);

  const getItem = async () => {
    const itemsCollection = collection(db, "figuras");
    const productosSnapshot = await getDocs(itemsCollection);
    console.log("productos del Snap: ", productosSnapshot);
    const productList = productosSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log("doc ", doc.data());

      return product;
    });

    return productList;
  };
  useEffect(() => {
    getItem().then((res) => {
      const itenId = res.find((e) => e.id == id);
    });
  }, []);

  const initial = 1;
  const [cantidad, setContador] = useState(1);
  return (
    <div className="mercaderia-item">
      <img src={imagen} className="imgItem" />
      <h3>{nombre}</h3>
      <h4>Precio: $ {precio}</h4>
      <Link to={`/detail/${id}`}>
        <button className="botonCarrito4">DETALLES</button>
      </Link>
      <button
        className="botonCarrito3"
        onClick={addProductCart}
        disabled={cantidad === stock ? true : false}
      >
        COMPRAR
      </button>
    </div>
  );
}
export default Item;
