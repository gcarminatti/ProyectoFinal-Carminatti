import React from "react";
import ReactDOM from "react-dom";
import styleListContainer from "./ItemListContainer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ItemListPresentation = ({ items }) => {
  return (
    <div className="d-flex" style={styleListContainer}>
      {items.map((productos) => {
        return (
          <div className="container-fluid mt-5 mb-5">
            <div className=" row-cols-sm-2 row-cols-md-4 row-cols-lg-1 g-4">
              <div className=" col ">
                <div className="card h-100">
                  <div className="card-body">
                    <div className="card-img-actions">
                      <img
                        src={productos.img}
                        className="card-img img-fluid"
                        width="110"
                        height="350"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card-body bg-light text-center">
                    <div className="mb-2">
                      <h6 className="font-weight-semibold mb-2">
                        <a
                          href="#"
                          className="text-decoration-none text-dark mb-2"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Toshiba Notebook with 500GB HDD &amp; 8GB RAM"
                        >
                          {productos.titulo}
                        </a>
                      </h6>

                      <a
                        href="#"
                        className="text-muted"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Laptops &amp; Notebooks"
                      >
                        {productos.categoria}
                      </a>
                    </div>

                    <h3 className="mb-0 font-weight-semibold">
                      ${productos.precio}
                    </h3>

                    <div>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                      <i className="fa fa-star star"></i>
                    </div>

                    <div className="text-muted mb-3">
                      {productos.review} Opiniones
                    </div>
                    <Link to={`/itemDetail/${productos.id} `}>
                      <Button variant="primary">Detalles</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListPresentation;
