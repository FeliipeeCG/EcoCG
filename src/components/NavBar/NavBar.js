import React from "react";
function NavBar() {
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
            <a href="https://feliipeecg.github.io/ProyectoF/" target="_blank">
              PRIMERA <br />
              PAGINA
            </a>
          </button>
        </li>
        <li>
          <button className="textoCarrito">
            <a
              href="https://feliipeecg.github.io/Tienda/index.html"
              target="_blank"
            >
              SEGUNDA <br />
              PAGINA
            </a>
          </button>
        </li>
        <li>
          <button className="textoCarrito">
            <a href="http://localhost:3000">
              MI TIENDA <br />
              <img src="/.\carrito.png" width="20" height="20" />
            </a>
          </button>
        </li>
      </ul>
    </header>
  );
}
export default NavBar;
