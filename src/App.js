import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import "./App.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="login" element={<Login />}/>
    <Route path="register" element={<Register />}/>
    <Route path="cart" element={<Cart />}/>
    <Route path="product" element={<Product />}/>
    <Route path="productList" element={<ProductList />}/>
</Routes>
</BrowserRouter>
      
    </div>  );
}

export default App;
