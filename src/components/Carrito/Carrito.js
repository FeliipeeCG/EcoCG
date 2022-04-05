import { FaShoppingCart } from "react-icons/fa";
import Button from "@mui/material/Button";
function Carrito() {
  return (
    <Button>
      {" "}
      <FaShoppingCart className="iconoCart" />{" "}
      <span className="cantidadCart">1</span>
    </Button>
  );
}
export default Carrito;
