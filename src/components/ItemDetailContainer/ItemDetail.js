import { Container, Grid, Button } from "@mui/material";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [cart, setCart] = useState({});
  const onAdd = () => {
    setCart(item);
  };
  return (
    <Container>
      <Grid container className="boxDetail">
        <Grid md={6} sm={12}>
          <div className="textoDetail">
            <h2>{item.nombre}</h2>
            <p>Descripción: {item.detalle}</p>
            <br />
            {cart.id ? (
              <div>
                <Link to={`/cart`}>
                  <button className="botonCarrito2">FINALIZAR COMPRA</button>
                </Link>
              </div>
            ) : (
              <ItemCount
                stock={item.stock}
                initial={1}
                onAdd={() => onAdd()}
              ></ItemCount>
            )}
            <br />
          </div>
        </Grid>
        <Grid md={3}>
          <div className="mercaderia-item2">
            <img src={item.imagen} alt="imagenDetail" />
            <h3> $ {item.precio} </h3>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ItemDetail;
