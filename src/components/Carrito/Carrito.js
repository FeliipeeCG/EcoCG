import CartContext from "../context/CartContext";
import { useContext, useState } from "react";
import cartProducts from "../context/CartContext";
//COMPONENTES
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
//function Carrito() {
//return (
// <button className="botonCarrito1">
// <img src="/.\carrito.png" width="20" height="20" />
//<h2 className="txtCarro">{cartProducts.length}</h2>
//</button>
//);
//}
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
        <img src="/.\carrito.png" width="20" height="20" />
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
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <p className="textoCarrito">CARRITO</p>
        <Divider />
        {cartProducts.map((cartProduct) => {
          return (
            <div className="item-cart-modal" key={cartProduct.id}>
              <div className="item-cart-modal__img">
                <img src={`./${cartProduct.image}`} />
              </div>
              <div className="item-cart-modal__info">
                <p>{cartProduct.title}</p>
                <span>$ {cartProduct.price}</span>
              </div>
              <div className="item-cart-modal__action">
                <button>X</button>
              </div>
            </div>
          );
        })}

        <Divider />
        <div className="footer-modal-cart">
          <button className="btn-custom">
            <Link to="/cart">Iniciar la compra</Link>
          </button>
        </div>
      </Menu>
    </div>
  );
};

export default Carrito;
