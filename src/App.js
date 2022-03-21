import "./App.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import ListMercaderia from "./components/ListMercaderia/ListMercaderia";
function App() {
  return (
    <div className="App">
      <h1>TU TIENDA FAVORITA</h1>
      <NavBar />
      <h2>MERCADERIA</h2>
      <ListMercaderia />
    </div>
  );
}

export default App;
