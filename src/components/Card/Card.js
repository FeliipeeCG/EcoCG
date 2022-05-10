import React, { useState, useEffect, useContext } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
//FUNCION
export default function Card({ data, action }) {
  const navigate = useNavigate();
  const { cartProducts, addProductToCart } = useContext(CartContext);
  const { nombre, precio, stock, imagen, id } = data;
  const [count, setCount] = useState(1);
  const [countTest, setCountTest] = useState(1);

  const changePage = () => {
    navigate(`/productos/${id}`);
  };
  const addToCart = (e) => {
    e.stopPropagation();
    console.log("Productos agregados:", cartProducts);
    addProductToCart(data);
  };
  return (
    <div className="mercaderia-item">
      <img src={imagen} className="imgItem" />{" "}
      <div>
        <h3>{nombre}</h3>
        <p>Precio: $ {precio}</p>
        <p>Unidades disponibles: {stock} </p>
        <Link to={`/detail/${id}`}>
          <button className="botonCarrito3">DETALLES</button>
        </Link>
        <button onClick={addToCart} className="botonCarrito4">
          COMPRAR
        </button>
      </div>
    </div>
  );
}
