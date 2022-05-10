import { useState } from "react";
const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const ClickRestar = () => {
    setCount(count - 1);
  };
  return (
    <div className="btnContadores">
      <button
        className="botonCarrito4"
        onClick={onAdd}
        disabled={count === stock ? true : false}
      >
        +
      </button>
      <button className="botonCarrito4" onClick={ClickRestar}>
        -
      </button>
      <p>Cantidad: {count}</p>
      <br />
      <button className="botonCarrito4" onClick={() => onAdd(count)}>
        COMPRAR
      </button>
    </div>
  );
};
export default ItemCount;
