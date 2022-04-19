import dataProducts from "../data/Mercaderia";
import { useEffect, useState, useContext } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(dataProducts);
      }, 2000);
    });
  };

  const filterProductByCategory = (array, category) => {
    array.map((producto) => {
      if (category == producto.categoria) {
        return setProducts((products) => [...products, producto]);
      }
    });
  };

  useEffect(() => {
    getProducts().then((res) => {
      category ? filterProductByCategory(res, category) : setProducts(res);
    });
  }, [category]);

  return (
    <div key={products.id}>
      {products ? (
        <ItemList items={products}></ItemList>
      ) : (
        <div>Carganding... </div>
      )}
    </div>
  );
};
export default ItemListContainer;
