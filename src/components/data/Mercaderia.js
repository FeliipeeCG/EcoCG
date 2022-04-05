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
    altura: 20,
    stock: 10,
    imagen: figuraGoku,
    detalle:
      "Figura lanzada por el estreno de la pelicula La Resurreccion de Frizzer.",
  },
  {
    id: 2,
    nombre: "ITADORI",
    precio: 4000,
    origen: "ESPAÑA",
    altura: 22,
    stock: 15,
    imagen: figuraItadori,
    detalle: "Primera figura del protagonista de Jujutsu Kaisen.",
  },
  {
    id: 3,
    nombre: "KURAMA",
    precio: 4500,
    origen: "CANADA",
    altura: 25,
    stock: 10,
    imagen: figuraKurama1,
    detalle: "Naruto modo Kurama cubierto del Susaano.",
  },
  {
    id: 4,
    nombre: "LUFFY",
    precio: 6000,
    origen: "JAPON",
    altura: 28,
    stock: 10,
    imagen: figuraLuffy,
    detalle: "Luffy en la cuarta marcha modelo SNAKEMAN.",
  },
];

export default mercaderia;
