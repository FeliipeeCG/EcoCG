import { Link } from "react-router-dom";
function Item({ item: { nombre, precio, imagen, id } }) {
  return (
    <div className="mercaderia-item">
      <img src={imagen} className="imgItem" />
      <h3>{nombre}</h3>
      <h4>Precio: $ {precio}</h4>
      <Link to={`/detail/${id}`}>
        <button className="botonCarrito4">DETALLES</button>
      </Link>
      <button className="botonCarrito3">COMPRAR</button>
    </div>
  );
}
export default Item;
