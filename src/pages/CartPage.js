import { useState, useContext } from "react";
import CartContext from "../components/context/CartContext";
import ModalCustom from "../components/Modal/Modal";
import db from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const CartPage = () => {
  const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [order, setOrder] = useState({
    buyer: formData,
    items: cartProducts.map((cartProduct) => {
      return {
        id: cartProduct.id,
        title: cartProduct.title,
        price: cartProduct.price,
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
    console.log("orden generada: ", orderDoc.id);
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
        <div>
          <h2>Producto</h2>
          <h2>Descripcion</h2>
          <h2>Precio unitario</h2>
          <h2>Cantidad</h2>
          <h2>Quitar</h2>
        </div>
        {cartProducts.map((cartProduct) => {
          const { price, imagen, title } = cartProduct;
          return (
            <>
              <div>
                <img src={`./${imagen}`} />
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
          <p>TOTAL</p>
          <p>$ {totalPrice}</p>
        </div>
      </div>
    </Container>
  );
};
