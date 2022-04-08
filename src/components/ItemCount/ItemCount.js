import { useState } from "react";

const ItemCount = ({ stock }) => {
  const initial = 1;
  const [cantidad, setContador] = useState(1);

  const ClickSumar = () => {
    setContador(cantidad + 1);
  };
  const ClickRestar = () => {
    setContador(cantidad - 1);
  };
  return (
    <div>
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
      <h2> Me llevo: {cantidad}</h2>
    </div>
  );
};
export default ItemCount;
