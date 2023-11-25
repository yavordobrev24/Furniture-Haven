import { Routes, Route, useNavigate } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "../../contexts/authContext.jsx";

import Logout from "../Logout/Logout.jsx";
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
import EditReviewPage from "../EditReview/EditReviewPage.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductList category="" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products/kitchen"
            element={<ProductList category="kitchen" />}
          />
          <Route
            path="/products/bedroom"
            element={<ProductList category="bedroom" />}
          />
          <Route
            path="/products/living-room"
            element={<ProductList category="living-room" />}
          />
          <Route path="/products/:id" element={<Details />} />
          <Route path="/products/:id/add-review" element={<AddReviewPage />} />
          <Route
            path="/products/:id/edit-review/:reviewId"
            element={<EditReviewPage />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
