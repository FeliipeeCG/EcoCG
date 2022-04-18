import CartContext from "../context/CartContext";
import { useContext, useEffect } from "react";
import cartProducts from "../context/CartContext";
function Carrito() {
  const { cartProducts } = useContext(CartContext);
  return (
    <button className="botonCarrito1">
      <img src="/.\carrito.png" width="20" height="20" />
      <h2 className="txtCarro">{cartProducts.length}</h2>
    </button>
  );
}
export default Carrito;
