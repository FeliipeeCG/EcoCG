import "./App.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";
import ListMercaderia from "./components/ListMercaderia/ListMercaderia";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <h1>TU TIENDA FAVORITA</h1>
      <NavBar />
      <h2>MERCADERIA</h2>
      <ListMercaderia />
      <ItemListContainer>
        <h2>Productos que te gustan</h2>
      </ItemListContainer>
    </div>
  );
}

export default App;
