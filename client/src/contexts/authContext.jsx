import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import usePersistedState from "../hooks/usePersistedState.js";
import Path from "../path.js";
import * as authService from "../services/authService.js";
import * as cartService from "../services/cartService.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const onBuy = async (furnitureId) => {
    const result = await cartService.addToUserCart(furnitureId, auth.cart);

    setAuth((state) => ({ ...state, result }));
  };
  const handleCheckout = async (cartId, cartData) => {
    const result = await cartService.clearUserCart(cartId, cartData);

    setAuth((state) => ({ ...state, cart: result }));
  };
  const handleRemoveItem = async (cartId, cartData, itemId) => {
    const result = await cartService.removeCartItem(cartId, cartData, itemId);

    setAuth((state) => ({ ...state, cart: result }));
  };

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    localStorage.setItem("accessToken", result.accessToken);
    const cart = await cartService.getUserCart(result._id);
    result.cart = cart;

    setAuth(result);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(
      values.username,
      values.email,
      values.password
    );

    localStorage.setItem("accessToken", result.accessToken);
    const cart = await cartService.createUserCart(result._id);
    result.cart = cart;
    setAuth(result);
    navigate(Path.Home);
  };
  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    setAuth({});
    navigate(Path.Home);
  };
  const value = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    handleCheckout,
    handleRemoveItem,
    onBuy,
    userId: auth._id,
    username: auth.username,
    email: auth.email,
    cart: auth.cart,
    isAuthenticated: !!auth.email,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
