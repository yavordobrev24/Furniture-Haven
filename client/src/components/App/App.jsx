import { Routes, Route } from "react-router-dom";

import "./App.css";
import { AuthProvider } from "../../contexts/authContext.jsx";
import Path from "../../path.js";

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
import AuthGuard from "../guards/AuthGuard.jsx";
import GuestOnlyGuard from "../guards/GuestOnlyGuard.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={Path.Products} element={<ProductList category="" />} />
          <Route path={Path.About} element={<About />} />
          <Route
            path={`${Path.Products}/kitchen`}
            element={<ProductList category="kitchen" />}
          />
          <Route
            path={`${Path.Products}/bedroom`}
            element={<ProductList category="bedroom" />}
          />
          <Route
            path={`${Path.Products}/living-room`}
            element={<ProductList category="living-room" />}
          />
          <Route path={`${Path.Products}/:id`} element={<Details />} />
          <Route element={<GuestOnlyGuard />}>
            <Route path={Path.Register} element={<Register />} />
            <Route path={Path.Login} element={<Login />} />
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
