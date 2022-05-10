import { useEffect, useState, useContext } from "react";
import Card from "../Card/Card";
import Mercaderia from "../../Utils/Mercaderia";
import { Link, useParams } from "react-router-dom";
import db from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const itemsCollection = collection(db, "figuras");
    const productosSnapshot = await getDocs(itemsCollection);
    const productList = productosSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      console.log("product:", product);
      return product;
    });
    return new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(productList);
      }, 5330);
    });
  };

  useEffect(() => {
    setProducts([]);
    getProducts().then((productos) => {
      setLoading(false);
      category
        ? filterProductByCategory(productos, category)
        : setProducts(productos);
    });
  }, [category]);

  const filterProductByCategory = (array, category) => {
    array.map((product, i) => {
      if (product.categoria === category) {
        return setProducts((products) => [...products, product]);
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
          {" "}
          {products.map((product) => (
            <Card data={product} key={product.id} />
          ))}{" "}
        </>
      )}
    </div>
  );
};
export default ItemListContainer;
