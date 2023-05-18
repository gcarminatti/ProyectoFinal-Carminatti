import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMain from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import Form from "./components/Form/Form.jsx";
import CartContextProvider from "./context/CartContext";
import FormCheckOutContainer from "./components/FormCheckOut/FormCheckOutContainer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavbarMain />}>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/Categoria/:categoriaNombre"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/form" element={<Form />} />
            <Route path="/checkout" element={<FormCheckOutContainer />} />
            <Route path="*" element={<h1> Este sitio no existe</h1>} />
          </Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

// {/* <div className="App">
//       <NavbarMain />
//       <ItemListContainer />
//       <ItemDetailContainer />

//       {/* <FetchingData /> */}
//     </div> */}
