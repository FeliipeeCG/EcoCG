import { Button } from "@mui/material";
import {Link} from 'react-router-dom'

function Item({ item: { nombre, altura, stockItem, precio, imagen, id }}) {
  return (
    <div className="mercaderia-item">
      <img src={imagen} className="imgItem" />
      <h3>{nombre}</h3>
      <p>Precio: $ {precio}</p>
      <h3>altura{altura}</h3>
      <Link to={`/detail/${id}`}>
      <Button className="botonCarrito4">Ver detalle</Button>
      </Link>
      
    </div>
  );
}
export default Item;
