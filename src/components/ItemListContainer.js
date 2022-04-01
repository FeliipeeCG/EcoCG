import { useState, useEffect } from "react";
import ListMercaderia from "./ListMercaderia/ListMercaderia";
import Mercaderia from "./Mercaderia";

const ItemListContainer = ({ childen }) => {
  const [Product, setProducsts] = useState([]);
  const getProducts = () => {
    return new Promise((resolve, _reject) => {
      return setTimeout(() => {
        resolve(ListMercaderia);
      }, 2000);
    });
  };
  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducsts(data);
      })
      .finally(() => {
        console.log("FIN DE LLAMADA");
      });
  }, []);

  return (
    <div>
      <h2>{childen}</h2>
      <div>
        <Mercaderia />
      </div>
    </div>
  );
};
export default ItemListContainer;
