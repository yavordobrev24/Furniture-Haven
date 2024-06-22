import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "../../contexts/authContext.jsx";
import Product from "../Product/Product.jsx";
import Path from "../../path.js";
import Footer from "../Footer/Footer.jsx";
import Logout from "../Logout/Logout.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Home from "../Home/Home.jsx";
import Header from "../Header/Header.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import CategoryPage from "../CategoryPage/CategoryPage.jsx";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import AddReview from "../AddReview/AddReview.jsx";
import EditReview from "../EditReview/EditReview.jsx";
import AuthGuard from "../guards/AuthGuard.jsx";
import GuestOnlyGuard from "../guards/GuestOnlyGuard.jsx";
import AdminOnlyGuard from "../guards/AdminOnlyGuard.jsx";
import AddProduct from "../AddProduct/AddProduct.jsx";
import EditProduct from "../EditProduct/EditProduct.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route
            path={`${Path.Categories}/:category`}
            element={<CategoryPage />}
          />
          <Route path={`${Path.Product}/:id`} element={<Product />} />
          <Route path={Path.ShoppingCart} element={<ShoppingCart />} />
          <Route element={<GuestOnlyGuard />}>
            <Route path={Path.Register} element={<Register />} />
            <Route path={Path.Login} element={<Login />} />
          </Route>
          <Route element={<AdminOnlyGuard />}>
            <Route path={`${Path.AddProduct}`} element={<AddProduct />}></Route>
            <Route
              path={`${Path.EditProduct}/:id`}
              element={<EditProduct />}
            ></Route>
          </Route>
          <Route element={<AuthGuard />}>
            <Route
              path={`${Path.Product}/:id/add-review`}
              element={<AddReview />}
            />
            <Route
              path={`${Path.Product}/:id/edit-review/:reviewId`}
              element={<EditReview />}
            />
            <Route path={Path.Logout} element={<Logout />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
