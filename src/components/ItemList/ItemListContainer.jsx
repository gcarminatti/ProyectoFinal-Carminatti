import { useState, useEffect } from "react";
import ItemListPresentation from "./itemListPresentation";
import { productos } from "../../productsMock";
import { useParams } from "react-router-dom";
import { getDb } from "../../FireBaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoriaNombre } = useParams();

  useEffect(() => {
    let queryOfItems;
    const itemsCollection = collection(getDb, "productos");

    if (categoriaNombre) {
      const itemsQuery = query(
        itemsCollection,
        where("categoria", "==", categoriaNombre)
      );
      queryOfItems = itemsQuery;
    } else {
      queryOfItems = itemsCollection;
    }

    getDocs(queryOfItems)
      .then((res) => {
        const productos = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(productos);
      })
      .catch((err) => console.log(err));
  }, [categoriaNombre]);

  return (
    <div>
      <ItemListPresentation items={items} />
    </div>
  );
};

export default ItemListContainer;

// useEffect(() => {
//   const productsFilter = productos.filter(
//     (item) => item.categoria === categoriaNombre
//   );
//   const tarea = new Promise((resolve, reject) => {
//     resolve(categoriaNombre ? productsFilter : productos);
//   });

//   tarea.then((res) => setItems(res)).catch((error) => console.log(error));
// }, [categoriaNombre]);