import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (productos) => {
    let existe = existingItemById(productos.id);
    if (existe) {
      let newCart = cart.map((item) => {
        if (item.id === productos.id) {
          return { ...item, quantity: productos.quantity };
        } else {
          return item;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, productos]);
    }
  };

  const removeProductById = (id) => {
    const filtarItem = cart.filter((item) => item.id !== id);
    setCart(filtarItem);
  };

  const clearCart = () => {
    setCart([]);
  };

  const existingItemById = (id) => {
    const itemAlreadyInCart = cart.some((item) => item.id === id);
    return itemAlreadyInCart;
  };

  const totalPrice = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.precio * item.quantity;
    }, 0);
    return total;
  };

  const cartWidgetCounter = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let productById = cart.find((elemento) => elemento.id === id);
    return productById?.quantity;
  };

  let data = {
    agregarAlCarrito,
    cart,
    clearCart,
    removeProductById,
    totalPrice,
    cartWidgetCounter,
    getQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
