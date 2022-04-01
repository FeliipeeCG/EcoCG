import Item from "./Mercaderia";
const ItemList = (mockProducts) => {
  return (
    <div>
      {mockProducts.map((producto, id) => {
        return <Item data={producto} key={id} />;
      })}
    </div>
  );
};
export default ItemList;
