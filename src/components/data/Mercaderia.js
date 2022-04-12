import figuraGoku from "../productos/figuras/figuraGoku.png";
import figuraItadori from "../productos/figuras/figuraItadori.png";
import figuraKurama1 from "../productos/figuras/figuraKurama1.png";
import figuraLuffy from "../productos/figuras/figuraLuffy.png";

const mercaderia = [
  {
    id: 1,
    nombre: "GOKU BLUE",
    precio: 5000,
    origen: "EEUU",
    altura: " 20cm",
    stock: 10,
    imagen: figuraGoku,
    categoria: "DRAGON BALL",
    detalle:
      "Figura lanzada por el estreno de la pelicula La Resurreccion de Frizzer.",
  },
  {
    id: 2,
    nombre: "ITADORI",
    precio: 4000,
    origen: "ESPAÑA",
    altura: " 22cm",
    stock: 15,
    imagen: figuraItadori,
    categoria: "JUJUTSU KAISEN",
    detalle: "Primera figura del protagonista de Jujutsu Kaisen.",
  },
  {
    id: 3,
    nombre: "KURAMA",
    precio: 4500,
    origen: "CANADA",
    altura: " 25cm",
    stock: 10,
    imagen: figuraKurama1,
    categoria: "NARUTO SHIPPUDEN",
    detalle: "Naruto modo Kurama cubierto del Susaano.",
  },
  {
    id: 4,
    nombre: "LUFFY",
    precio: 6000,
    origen: "JAPON",
    altura: " 30cm",
    stock: 10,
    imagen: figuraLuffy,
    categoria: "ONE PIECE",
    detalle: "Luffy en la cuarta marcha modelo SNAKEMAN.",
  },
];
export default mercaderia;
