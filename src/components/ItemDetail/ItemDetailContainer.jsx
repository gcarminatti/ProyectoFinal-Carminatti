import React, { useContext, useEffect, useState } from "react";
import ItemDetailPresentation from "./ItemDetailPresentation";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { getDb } from "../../FireBaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  //Traer productos por id
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const itemsCollection = collection(getDb, "productos");
    const refDoc = doc(itemsCollection, id);
    getDoc(refDoc)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));

    // let encontrarPorId = productos.find((prod) => prod.id === +id);
    // setProduct(encontrarPorId);
  }, [id]);

  const onAdd = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    agregarAlCarrito(data);

    Swal.fire({
      title: `${product.titulo} agregado al carrito`,
      showCancelButton: true,
      confirmButtonText: "Ir al carrito",
      cancelButtonText: "Seguir comprando",
      showCloseButton: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      iconColor: "blue",
      allowEscapeKey: false,
      preConfirm: () => {
        agregarAlCarritoSweet();
      },
    });

    const agregarAlCarritoSweet = () => {
      navigate("/cart");
    };
    // Swal.fire({
    //   position: "center",
    //   icon: "success",
    //   title: `${product.titulo} agregado al carrito`,
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
  };

  let cantidadTotal = getQuantityById(product.id);

  return (
    <div>
      <ItemDetailPresentation
        product={product}
        onAdd={onAdd}
        cantidadTotal={cantidadTotal}
      />
    </div>
  );
};

export default ItemDetailContainer;
