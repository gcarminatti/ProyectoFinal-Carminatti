import FormCheckOutPresentation from "./FormCheckOutPresentation";

import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../context/CartContext";
import { getDb } from "../../FireBaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

const FormCheckOutContainer = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const checkOutFunction = (data) => {
    let total = totalPrice();
    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(getDb, "Orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(getDb, "productos", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const { handleSubmit, handleChange, errors, values, touched } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      numerodetarjeta: "",
      pais: "",
      zip: "",
    },
    onSubmit: checkOutFunction,

    // validationSchema: Yup.object().shape({
    //   Nombre: Yup.string().required("El nombre es requerido"),
    //   apellido: Yup.string().required("El apellido es requerido"),
    // }),
  });

  return (
    <div>
      {orderId ? (
        <h1>{orderId}</h1>
      ) : (
        <FormCheckOutPresentation
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      )}
    </div>
  );
};

export default FormCheckOutContainer;
