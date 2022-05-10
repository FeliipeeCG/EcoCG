import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Mercaderia from "../Utils/Mercaderia";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const getProduct = async () => {
    const docRef = doc(db, "figuras", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let product = docSnap.data();
      product.id = docSnap.id;
      setProduct(product);
    } else {
      console.log("EERRRROR");
      navigate("/error");
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <Container className="container-general">
      <div className="container-detail">
        <div className="container-detail__img">
          <img src={`../${product.imagen}`} alt="jean" />
        </div>
        <div className="container-detail__info">
          <h3 className="info__title">{product.nombre}</h3>
          <p className="info__text">$ {product.precio}</p>
          <p className="info__text">{product.origen}</p>

          <button className="detail__btn-buy">COMPRAR</button>
        </div>
      </div>
    </Container>
  );
};

export default DetailPage;
