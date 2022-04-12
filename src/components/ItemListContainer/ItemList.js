import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="boxItem">
      {items ? (
        items.map((e) => <Item item={e} key={e.id}></Item>)
      ) : (
        <h1>Va lento por el lag...</h1>
      )}
    </div>
  );
};

export default ItemList;
