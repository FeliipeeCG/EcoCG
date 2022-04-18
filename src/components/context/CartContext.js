import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const addProductCart = (product) => {
    console.log("productos agregados al carrito", product);
    setCartProducts((cartProducts) => [...cartProducts, product]);
    console.log("Productos por comprar: ", cartProducts);
  };
  const data = {
    cartProducts,
    addProductCart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
