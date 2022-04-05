import { Button } from "@mui/material";

function Item({ nombre, precio, img }) {
  return (
    <div className="mercaderia-item">
      <img src={img} className="imgItem" />
      <h3>{nombre}</h3>
      <p>Precio: $ {precio}</p>
      <Button className="botonCarrito4">Ver detalle</Button>
    </div>
  );
}
export default Item;
