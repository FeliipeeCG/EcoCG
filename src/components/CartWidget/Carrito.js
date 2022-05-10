import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
//COMPONENTES
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Mercaderia from "../../Utils/Mercaderia";

const Carrito = () => {
  const { cartProducts } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("cartProducts: ", cartProducts);

  return (
    <div className="cart-button">
      <button
        onClick={handleClick}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className="botonCarrito1"
      >
        <img src="/.\carrito.png" width="30" height="20" />
        <h2 className="txtCarro">{cartProducts.length}</h2>
      </button>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        className="cart-modal"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 40,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "flex",
              position: "absolute",
              top: 0,
              right: 5,
              width: 20,
              height: 20,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <h4 className="textoCarrito"> TU COMPRA</h4>
        <Divider />

        <div className="footer-modal-cart">
          <button className="botonCarrito2">
            <Link to="/cart">COMPREMOS</Link>
          </button>
          <div>
            <button className="botonCarrito2">⇇</button>
          </div>
        </div>
        {cartProducts.map((cartProduct) => {
          return (
            <div className="item-cart-modal" key={cartProduct.id}>
              <div className="item-cart-modal__img">
                <img src={`./${cartProduct.imagen}`} width="60" height="100" />
              </div>
              <div className="item-cart-modal__info">
                <h5 className="pModal">
                  {cartProduct.nombre} (${cartProduct.precio})
                </h5>
              </div>
            </div>
          );
        })}
        <Divider />
      </Menu>
    </div>
  );
};

export default Carrito;
