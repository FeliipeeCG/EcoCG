import Mercaderia from "../Mercaderia";
const ListMercaderia = () => {
  return (
    <div className="container-mercaderia">
      <Mercaderia
        title="Goku Blue"
        origin="EEUU"
        price="4500"
        stock="15"
        img="./figuraGoku.png"
      />

      <Mercaderia
        title="Luffy"
        img="./figuraLuffy.png"
        origin="EEUU"
        price="5000"
        stock="10"
      />
      <Mercaderia
        title="Kurama"
        img="./figuraKurama1.png"
        origin="JAPON"
        price="4000"
        stock="10"
      />
      <Mercaderia
        title="Itadori"
        img="./figuraItadori.png"
        origin="CANADA"
        price="4300"
        stock="5"
      />
    </div>
  );
};
export default ListMercaderia;
