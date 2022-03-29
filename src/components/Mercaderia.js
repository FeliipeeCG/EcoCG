import React, { useState } from "react";
import Modal from "./Modal";
export default function Mercaderia(props) {
  console.log("Precio: ", props.price);
  console.log("Origen: ", props.origin);
  console.log("Titulo: ", props.title);
  console.log("Img: ", props.img);
  console.log("Stock: ", props.stock);
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
      <div className="imag-mercaderia">
        <img src={props.img} />
      </div>
      <h3>{props.title}</h3>
      <p>Precio: ${props.price}</p>
      <p>Origen: {props.origin}</p>
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
