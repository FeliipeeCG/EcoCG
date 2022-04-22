import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/CartContext";

export default function Item({ item: { nombre, precio, imagen, id, stock } }) {
  const navigate = useNavigate();
  const { cartProducts, addProductToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [countTest, setCountTest] = useState(1);

  const addToCart = (e) => {
    e.stopPropagation();
    console.log("Productos agregados:", cartProducts);
    addProductToCart(Item);
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
