import dataProducts from "../data/Mercaderia";
import { useEffect, useState, useContext } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(dataProducts);
      }, 5330);
    });
  };

  useEffect(() => {
    setProducts([]);
    getProducts().then((res) => {
      setLoading(false);
      category ? filterProductByCategory(res, category) : setProducts(res);
    });
  }, [category]);

  const filterProductByCategory = (array, category) => {
    array.map((producto) => {
      if (category == producto.categoria) {
        return setProducts((products) => [...products, producto]);
      }
    });
  };

  return (
    <div key={products.id}>
      {loading ? (
        <img
          className="cargando"
          src="https://c.tenor.com/9WFsBeb7sr8AAAAC/loading-gif.gif"
          width="390"
          height="150"
        />
      ) : (
        <>
          <ItemList items={products}></ItemList>
        </>
      )}
    </div>
  );
};
export default ItemListContainer;
