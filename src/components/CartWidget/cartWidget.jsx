import { Link } from "react-router-dom";
import styleCart from "./cartWidget.module.css";
import { Cartfill } from "react-bootstrap-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cartWidgetCounter, cart } = useContext(CartContext);
  let total = cartWidgetCounter();
  return (
    <>
      {cart.length === 0 ? (
        <div></div>
      ) : (
        <Link to="/cart">
          <div className={styleCart["cart-widget"]}>
            <i className={`${styleCart["cart-icon"]} bi bi-cart-fill`} />
            <div className={styleCart["qty-display"]}>{total}</div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CartWidget;
