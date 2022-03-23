export default function Mercaderia(props) {
  console.log("Precio: ", props.price);
  console.log("Origen: ", props.origin);
  console.log("Titulo: ", props.title);
  console.log("Img: ", props.img);
  console.log("Stock: ", props.stock);

  return (
    <div className="mercaderia-item">
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>Origen: {props.origin}</p>
      <p>Precio: ${props.price}</p>
      <p>Stock: {props.stock}</p>
      <button className="botonCarrito">AÑADIR AL CARRITO</button>{" "}
      <button className="botonCarrito">REMOVER DEL CARRITO</button>
    </div>
  );
}
