import { useState } from "react";
const ItemCount = ({ stock, onAdd }) => {
  const initial = 1;
  const [cantidad, setContador] = useState(1);

  const ClickSumar = () => {
    setContador(cantidad + 1);
  };
  const ClickRestar = () => {
    setContador(cantidad - 1);
  };

  return (
    <div className="btnContadores">
      <button
        className="botonCarrito4"
        onClick={ClickSumar}
        disabled={cantidad === stock ? true : false}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="botonCarrito4"
        onClick={ClickRestar}
        disabled={cantidad === initial ? true : false}
      >
        -
      </button>
      <p>Cantidad: {cantidad}</p>
      <br />
      <button className="botonCarrito4" onClick={() => onAdd(cantidad)}>
        COMPRAR
      </button>
    </div>
  );
};
export default ItemCount;
