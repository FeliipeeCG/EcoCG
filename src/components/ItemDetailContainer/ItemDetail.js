import { Container, Grid, Button } from "@mui/material";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ image, name, price, detail, stock }) => {
  return (
    <Container>
      <Grid container className="boxDetail">
        <Grid md={6} sm={12}>
          <div className="textoDetail">
            <h2>{name}</h2>
            <p>Descripción: {detail}</p>
            <br />
            <ItemCount stock={stock} />
            <br />
            <Link to={"/cart"}>
              <Button className="botonCarrito4">COMPRAR</Button>
            </Link>
          </div>
        </Grid>
        <Grid md={3}>
          <div className="mercaderia-item2">
            <img src={image} className="figu" alt="imagenDetail" />
            <h3> $ {price} </h3>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ItemDetail;
