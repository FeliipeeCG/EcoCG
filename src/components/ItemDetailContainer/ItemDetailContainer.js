import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../data/Mercaderia";
import ItemDetail from "./ItemDetail";
import Container from "@mui/material/Container";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemElegido, setItemElegido] = useState([]);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(dataProducts);
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
          <ItemDetail item={itemElegido}></ItemDetail>
        ) : (
          <div>Paciencia que hay lag.....</div>
        )}
      </div>
    </Container>
  );
};
export default ItemDetailContainer;
