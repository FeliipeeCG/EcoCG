import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/Carrito";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
import React from "react";
import Carrito from "../CartWidget/Carrito";

function NavBar(props) {
  const getRoutes = async () => {
    const routesCollection = collection(db, "rutas");
    const routesSnapshot = await getDocs(routesCollection);
    const routesList = routesSnapshot.docs.map((doc) => {
      return doc.data();
    });
    getRoutes(routesList);
  };

  return (
    <header className="App-header">
      <img src="paga.png" className="img-header" />
      <ul className="navbar">
        <li>
          <button className="textoCarrito">
            <a href="https://www.instagram.com/feliipeecg/" target="_blank">
              IG DEL <br />
              VENDEDOR
            </a>
          </button>
        </li>

        <li>
          <button className="textoCarrito">
            <a href="http://localhost:3000">
              INICIO <br />
              DE LA TIENDA
            </a>
          </button>
        </li>
        <Carrito />
      </ul>
    </header>
  );
}
export default NavBar;
