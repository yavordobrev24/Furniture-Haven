import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "../../contexts/authContext.jsx";
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
import Details from "../Details/Details.jsx";
import AddReviewPage from "../AddReview/AddReviewPage.jsx";
import Profile from "../Profile/Profile.jsx";
import EditReviewPage from "../EditReview/EditReviewPage.jsx";
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
          <Route path="/categories/:category" element={<CategoryPage />} />
          <Route path="details/:id" element={<Details />} />

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
              path={`${Path.Products}/:id/add-review`}
              element={<AddReviewPage />}
            />
            <Route
              path={`${Path.Products}/:id/edit-review/:reviewId`}
              element={<EditReviewPage />}
            />
            <Route path={Path.Profile} element={<Profile />} />
            <Route path={Path.ShoppingCart} element={<ShoppingCart />} />
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
