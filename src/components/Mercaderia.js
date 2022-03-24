import React, { useState } from "react";
export default function Mercaderia(props) {
  console.log("Precio: ", props.price);
  console.log("Origen: ", props.origin);
  console.log("Titulo: ", props.title);
  console.log("Img: ", props.img);
  console.log("Stock: ", props.stock);
  console.log("Carrito: ", props.cart);
  const [count, setCount] = useState(props.stock);
  console.log("CONTANDO: ", count);
  const addStock = () => {
    if (count < props.stock) {
      setCount(count + 1);
    }
  };
  const removeStock = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="mercaderia-item">
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>Origen: {props.origin}</p>
      <p>Precio: ${props.price}</p>
      <p>Stock: {count}</p>
      <button onClick={addStock} className="botonCarrito4">
        REMOVER DEL CARRITO
      </button>
      <button onClick={removeStock} className="botonCarrito">
        AÑADIR AL CARRITO
      </button>
    </div>
  );
}
