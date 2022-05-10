import { useState, useContext } from "react";
import CartContext from "../context/CartContext";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Container } from "@mui/material";
const CartPage = () => {
  const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    direction: "",
  });
  const [order, setOrder] = useState({
    buyer: formData,
    items: cartProducts.map((cartProduct) => {
      return {
        id: cartProduct.id,
        title: cartProduct.nombre,
        price: cartProduct.precio,
      };
    }),
    total: totalPrice,
  });
  const [successOrder, setSuccessOrder] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let prevOrder = { ...order, buyer: formData };
    setOrder({ ...order, buyer: formData });
    pushOrder(prevOrder);
  };

  const pushOrder = async (prevOrder) => {
    const orderFirebase = collection(db, "ordenes");
    const orderDoc = await addDoc(orderFirebase, prevOrder);
    console.log("Compra realizada: ", orderDoc.id);
    setSuccessOrder(orderDoc.id);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    console.log("value: ", value);
    console.log("name: ", name);

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <Container>
      <div>
        {cartProducts.map((cartProduct) => {
          const { precio, imagen, nombre } = cartProduct;
          return (
            <>
              <div>
                <div className="marcoCompra">
                  <img src={`./${imagen}`} />
                  <h2>{nombre}</h2>
                  <p>Precio: ${precio}</p>
                  <button
                    className="botonCarrito6"
                    onClick={() => deleteProduct(cartProduct)}
                  >
                    X
                  </button>
                  <br />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <div>
          <br />
          <p>TOTAL</p>
          <p>$ {totalPrice}</p>
        </div>
      </div>
    </Container>
  );
};
export default CartPage;
