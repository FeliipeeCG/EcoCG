import { useState, useEffect, use } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { CartProvider } from "./context/CartContext";
import HomePage from "./pages/Home";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/NotFound";
import DetailPage from "./pages/Detail";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/:category/" element={<HomePage />} />
            <Route path="/:category/:id" element={<DetailPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/info" element={ItemDetail} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}
export default App;
