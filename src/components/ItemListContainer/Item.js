import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Item({ item: { nombre, altura, stockItem, precio, imagen, id } }) {
  return (
    <div className="mercaderia-item">
      <img src={imagen} className="imgItem" />
      <h3>{nombre}</h3>
      <h4>Precio: $ {precio}</h4>
      <Link to={`/detail/${id}`}>
        <button className="botonCarrito4">DETALLES</button>
      </Link>
    </div>
  );
}
export default Item;
