import { useContext } from "react";
import CartPresentation from "./CartPresentation";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CartContainer = ({}) => {
  const { cart, clearCart, removeProductById, totalPrice } =
    useContext(CartContext);

  let total = totalPrice();

  const navigate = useNavigate();

  const clearCartSwAlert = () => {
    Swal.fire({
      title: "¿Estas seguro de borar el contenido del carrito?",
      text: "Una vez confirmado no se podra revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, confirmo!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado!", "El carro fue borrado", "success");
      }
    });
  };
  return (
    <div>
      <CartPresentation
        navigate={navigate}
        cart={cart}
        removeProductById={removeProductById}
        total={total}
        clearCartSwAlert={clearCartSwAlert}
      />
    </div>
  );
};

export default CartContainer;
