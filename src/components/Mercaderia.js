import React, { useState } from "react";
export default function Mercaderia(props) {
  console.log("Precio: ", props.price);
  console.log("Origen: ", props.origin);
  console.log("Titulo: ", props.title);
  console.log("Img: ", props.img);
  console.log("Stock: ", props.stock);
  const [count, setCount] = useState(1);
  console.log("estado Contador: ", count);
  const addStock = () => {
    setCount(count + 1);
  };
  const removeStock = () => {
    setCount(count - 1);
  };
  return (
    <div className="mercaderia-item">
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>Origen: {props.origin}</p>
      <p>Precio: ${props.price}</p>
      <p>Stock: {count}</p>
      <button onClick={addStock} className="botonCarrito">
        AÑADIR AL CARRITO
      </button>
      <button onClick={removeStock} className="botonCarrito">
        REMOVER DEL CARRITO
      </button>
    </div>
  );
}
