import { useState, useContext } from "react";
import CartContext from "../components/context/CartContext";
const CartPage = () => {
  const { cartProducts, deleteProduct, Dolorosa } = useContext(CartContext);

  console.log("Productos del carrito: ", cartProducts);
  return (
    <Container>
      <div>
        <div>
          <h2>Producto</h2>
          <h2>Descripcion</h2>
          <h2>Precio unitario</h2>
          <h2>Cantidad</h2>
          <h2>Quitar</h2>
        </div>
        {cartProducts.map((cartProducts) => {
          const { price, image, title } = cartProduct;
          return (
            <>
              <div>
                <img src={"./${image}"} />
              </div>
              <div>
                <p>{title}</p>
              </div>
              <div>
                <p>precio: {price}</p>
              </div>
              <div>
                <p>1</p>
              </div>
              <div>
                <button onClick={() => deleteProduct(cartProduct)}> X </button>
              </div>

              <div></div>
            </>
          );
        })}
      </div>
      <div>
        <div>
          <p>total</p>
          <p>$ {Dolorosa}</p>
        </div>
      </div>
    </Container>
  );
};
