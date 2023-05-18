import stylesCounter from "./CounterPresentationModule.css";
import { Link } from "react-router-dom";

const CounterPresentation = ({ sumar, restar, counter, onAdd, stopRestar }) => {
  return (
    <div>
      <button
        onClick={restar}
        className="btn btn-danger btn-sm"
        id="minusButton"
      >
        <i className="bi bi-dash"></i>
      </button>
      <h3 id="counterDisplay">{counter}</h3>
      <button
        onClick={sumar}
        className="btn btn-success btn-sm"
        id="plusButton"
      >
        <i className="bi bi-plus"></i>
      </button>
      <button
        onClick={() => onAdd(counter)}
        className="btn btn-primary"
        id="addToCartButton"
      >
        Add to Cart
      </button>
      <Link to={`/`}>
        <button className="btn btn-dark ms-2">Regresar</button>
      </Link>
    </div>
  );
};

export default CounterPresentation;
