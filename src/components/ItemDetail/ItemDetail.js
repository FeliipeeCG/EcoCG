import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const ItemDetail = ({ data }) => {
  return (
    <Container>
      <Grid container className="boxDetail">
        <Grid md={6} sm={12}>
          <div>
            <h2>{Card.nombre}</h2>
            <p>Descripción: {data.detalle}</p>
            <p>Serie: {data.categoria}</p>
            <p>Altura: {data.altura}</p>
            <p>Origen: {data.origen}</p>
            <br />
            <div>
              <Link to={`/cart`}>
                <button className="botonCarrito2">FINALIZAR COMPRA</button>
              </Link>
            </div>
          </div>
        </Grid>
        <Grid md={3}>
          <div className="mercaderia-item2">
            <img src={data.imagen} alt="imagenDetail" />
            <h4 className="h4Precio"> $ {data.precio} </h4>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ItemDetail;
