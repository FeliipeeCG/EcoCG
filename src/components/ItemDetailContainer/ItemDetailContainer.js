import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../data/Mercaderia";
import ItemDetail from "./ItemDetail";
import Container from "@mui/material/Container";
import db from "../../firebase";
import { collection, doc, getDocs } from "firebase/firestore";
const ItemDetailContainer = () => {
  const { id } = useParams();
  const [itemElegido, setItemElegido] = useState([]);

  const getItem = async () => {
    const itemsCollection = collection(db, "figuras");
    const productosSnapshot = await getDocs(itemsCollection);
    console.log("productos del Snap: ", productosSnapshot);
    const productList = productosSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log("doc ", doc.data());
      return product;
    });
    return productList;

    //return new Promise((resolve, reject) => {
    //setTimeout(() => {
    //return resolve(dataProducts);
    //}, 2000);
    //});
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
