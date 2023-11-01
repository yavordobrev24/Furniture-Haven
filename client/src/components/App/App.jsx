import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Home from "../Home/Home.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import ProductList from "../ProductList/ProductList.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="site-container">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
