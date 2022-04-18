import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";
function Item({ item: { nombre, precio, imagen, id } }) {
  const { cartProducts, addProductCart } = useContext(CartContext);
  useEffect(() => {
    console.log("cartProducts: ", cartProducts);
  });
  const addToCart = (e) => {
    addProductCart(Item);
  };
  return (
    <div className="mercaderia-item">
      <img src={imagen} className="imgItem" />
      <h3>{nombre}</h3>
      <h4>Precio: $ {precio}</h4>
      <Link to={`/detail/${id}`}>
        <button className="botonCarrito4">DETALLES</button>
      </Link>
      <button className="botonCarrito3" onClick={addToCart}>
        COMPRAR
      </button>
    </div>
  );
}
export default Item;
