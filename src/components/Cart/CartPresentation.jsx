import cartStyles from "./CartPresentation.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CartPresentation = ({
  cart,
  clearCartSwAlert,
  removeProductById,
  total,
  navigate,
}) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>Resumen de Carrito</h1>
            <div className="border-bottom mb-3"></div>
            {cart.map((item) => (
              <div className="card mb-3" key={item.id}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={item.img}
                      className="card-img"
                      alt="Imagen del Producto"
                    />
                  </div>

                  <div className="col-md-4" id="shortDescription">
                    <div className="card-body">
                      <h5 className="card-title">{item.titulo}</h5>
                      <p className="card-text">{item.summaryDescripcion}</p>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card-body">
                      <p className="card-text">
                        <h6>Precio: $ {item.precio}</h6>
                        <small className="text-muted">Stock:{item.stock}</small>
                        <div className="quantityCart">
                          <label htmlFor="quantity">Quantity:</label>
                          <h4>{item.quantity}</h4>
                        </div>
                        <div className={cartStyles["btnContainer"]}>
                          <button
                            onClick={() => removeProductById(item.id)}
                            className="btn btn-dark btn-sm"
                            id="removeButton"
                          >
                            <i className="bi bi-x"></i>
                          </button>{" "}
                          <button
                            className="btn btn-danger btn-sm"
                            id="minusButton"
                          >
                            <i className="bi bi-dash"></i>
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            id="plusButton"
                          >
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4 mt-5 " id="cartSummary">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Resumen de Compra</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Sub-Total: $XX.XX</li>
                  <li className="list-group-item">Descuentos: $XX.XX</li>
                  <li className="list-group-item">Impuestos: $XX.XX</li>
                  <li className="list-group-item">
                    <strong>Total: ${total}</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className={cartStyles.cartSumarryButtons}>
              <button
                onClick={clearCartSwAlert}
                className="btn btn-dark"
                id="emptyCartButton"
              >
                Vaciar Carro
              </button>
              <button
                onClick={() => navigate("/checkout")}
                className="btn btn-primary"
                id="checkoutButton"
              >
                CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPresentation;
