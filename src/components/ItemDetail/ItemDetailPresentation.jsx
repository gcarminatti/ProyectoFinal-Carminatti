import React from "react";
import CounterCointainer from "../Counter/CounterCointainer";

const ItemDetailPresentation = ({ product, onAdd, cantidadTotal }) => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <img src={product.img} className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2>{product.titulo}</h2>
            <p>{product.descripcion}</p>
            <p>${product.precio}</p>
            <p>Stock: {product.stock}</p>

            {product.stock > 0 ? (
              <CounterCointainer
                stock={product.stock}
                onAdd={onAdd}
                initial={cantidadTotal}
              />
            ) : (
              <h2>No hay stock</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailPresentation;
