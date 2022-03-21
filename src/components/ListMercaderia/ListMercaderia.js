import Mercaderia from "../Mercaderia";
const ListMercaderia = () => {
  return (
    <div className="container-mercaderia">
      <Mercaderia
        title="Goku Blue"
        origin="EEUU"
        price="4500"
        serie="DBS"
        img="./figuraGoku.png"
      />
      <Mercaderia
        title="Kurama"
        img="./figuraKurama.png"
        origin="JAPON"
        price="4000"
        serie="Naruto"
      />
      <Mercaderia
        title="Luffy"
        img="./figuraLuffy.png"
        origin="EEUU"
        price="5000"
        serie="One Piece"
      />
      <Mercaderia
        title="Itadori"
        img="./figuraItadori.png"
        origin="CANADA"
        price="4300"
        serie="Jujutsu K"
      />
    </div>
  );
};
export default ListMercaderia;
