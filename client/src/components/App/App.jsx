import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Home from "../Home/Home.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import ProductList from "../ProductList/ProductList.jsx";
import About from "../About/About.jsx";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import Details from "../Details/Details.jsx";
import AddReviewPage from "../AddReview/AddReviewPage.jsx";
import Profile from "../Profile/Profile.jsx";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path="/add-review" element={<AddReviewPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
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
