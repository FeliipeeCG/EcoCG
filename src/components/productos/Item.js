import React, { useState, useEffect } from "react";
function Item({ nombre, precio, img }) {
  const addToCart = (evt) => {
    evt.stopPropagation();
    console.log("Añadido al carrito");
  };

  return (
    <div className="mercaderia-item">
      <img src={img} />
      <div>
        <h3>{nombre}</h3>
        <p>Precio: $ {precio}</p>
        <button className="botonCarrito">DETALLES</button>
        <button onClick={addToCart} className="botonCarrito4">
          COMPRAR
        </button>
      </div>
    </div>
  );
}
export default Item;
