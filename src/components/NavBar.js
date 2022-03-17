import React from "react";
function NavBar() {
  return (
    <header className="App-header">
      <img src="paga.png" className="img-header" />
      <h1>Bienvenidos a la tienda de Felipe</h1>
      <ul className="navbar">
        <li>
          <button>
            <a href="https://www.instagram.com/feliipeecg/" target="_blank">
              IG del vendedor
            </a>
          </button>
        </li>
        <li>
          <button>
            <a href="https://feliipeecg.github.io/ProyectoF/" target="_blank">
              Primera Pagina
            </a>
          </button>
        </li>
        <li>
          <button>
            <a
              href="https://feliipeecg.github.io/Tienda/index.html"
              target="_blank"
            >
              Segunda Pagina
            </a>
          </button>
        </li>
      </ul>
    </header>
  );
}
export default NavBar;
