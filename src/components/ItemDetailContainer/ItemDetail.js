import { Container, Grid } from "@mui/material";
import { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [cart, setCart] = useState({});
  const { cartProducts, addProductCart } = useContext(CartContext);
  const onAdd = () => {
    setCart(item);
    addProductCart(item);
  };
  console.log("Productos en el carrito: ", cartProducts);
  return (
    <Container>
      <Grid container className="boxDetail">
        <Grid md={6} sm={12}>
          <div className="textoDetail">
            <h2>{item.nombre}</h2>
            <p>Descripción: {item.detalle}</p>
            <p>Serie: {item.categoria}</p>
            <p>Altura: {item.altura}</p>
            <p>Origen: {item.origen}</p>
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
          </div>
        </Grid>
        <Grid md={3}>
          <div className="mercaderia-item2">
            <img src={item.imagen} alt="imagenDetail" />
            <h4 className="h4Precio"> $ {item.precio} </h4>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ItemDetail;
