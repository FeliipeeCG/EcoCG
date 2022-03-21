export default function Mercaderia(props) {
  console.log("Precio: ", props.price);
  console.log("Origen: ", props.origin);
  console.log("Titulo: ", props.title);
  console.log("Img: ", props.img);
  console.log("Serie: ", props.serie);

  return (
    <div className="mercaderia-item">
      <img src={props.img} />
      <h3>{props.title}</h3>
      <p>Serie: {props.serie}</p>
      <p>Precio: ${props.price}</p>
      <p>Origen: {props.origin}</p>
      <button className="botonCarrito">COMPRAR</button>
    </div>
  );
}
