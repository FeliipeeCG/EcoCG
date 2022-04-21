import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addProductCart = (product) => {
    let exist = cartProducts.find(
      (cartProducts) => cartProducts.id === product.id
    );
    !exist && setCartProducts((cartProducts) => [...cartProducts, product]);
  };
  const Dolorosa = () => {
    let total = 0;
    cartProducts.map((cartProduct) => {
      total = cartProduct.price + total;
    });
    return total;
  };

  const deleteProduct = (product) => {
    console.log("No quiero esto: ", product);
    setCartProducts(
      cartProducts.filter((cartProduct) => {
        return cartProduct.id !== product.id;
      })
    );
  };
  const data = {
    cartProducts,
    addProductCart,
    deleteProduct,
    Dolorosa,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
