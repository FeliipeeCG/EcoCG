import React, { useState, useEffect, useContext } from "react";
import Mercaderia from "../data/Mercaderia";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ListProducts = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const itemsCollection = collection(db, "figuras");
    const figurasSnapshot = await getDocs(itemsCollection);
    const productList = figurasSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log("product:", product);
      return product;
    });
    return productList;
  };

  useEffect(() => {
    setProducts([]);
    setLoading(true);
    getProducts().then((productos) => {
      setLoading(false);
      category
        ? filterProductByCategory(productos, category)
        : setProducts(productos);
    });
  }, [category]);

  const filterProductByCategory = (array, category) => {
    return array.map((product, i) => {
      if (product.category === category) {
        return setProducts((products) => [...products, product]);
      }
    });
  };

  return (
    <div className={`container-cards ${lightTheme ? "light-mode" : ""}`}>
      <h2> Productos en Oferta </h2>
      {loading ? (
        <div className="container-progress">
          <CircularProgress />
        </div>
      ) : (
        <>
          {" "}
          {products.map((product) => (
            <Card data={product} key={product.id} />
          ))}{" "}
        </>
      )}
    </div>
  );
};

export default ListProducts;
