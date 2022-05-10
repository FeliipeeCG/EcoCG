import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Mercaderia from "../../Utils/Mercaderia";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemElegido, setItemElegido] = useState([]);
  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(Mercaderia);
      }, 2000);
    });
  };
  useEffect(() => {
    getItem().then((res) => {
      const itenId = res.find((e) => e.id == id);
      setItemElegido(itenId);
    });
  }, []);

  return (
    <Container>
      <div className="itemElegido">
        {itemElegido ? (
          <div>Esta cargando</div>
        ) : (
          <ItemDetail data={Mercaderia} />
        )}
      </div>
    </Container>
  );
};
export default ItemDetailContainer;
