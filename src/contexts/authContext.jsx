import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Path from "../path.js";

import supabase from "../config/supabaseClient.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated"))
  );

  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("isAdmin"))
  );
  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userId"))
  );
  const [email, setEmail] = useState(JSON.parse(localStorage.getItem("email")));
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart || []));
    localStorage.setItem("isAdmin", JSON.stringify(isAdmin || false));
    localStorage.setItem(
      "isAuthenticated",
      JSON.stringify(isAuthenticated || false)
    );
    localStorage.setItem("userId", JSON.stringify(userId || null));
    localStorage.setItem("email", JSON.stringify(email || null));
  }, [cart, isAdmin, isAuthenticated, userId, email]);
  const addToCart = async (cartItem) => {
    setCart((oldState) => {
      const item = oldState?.find((item) => item.id == cartItem.id);
      if (item) {
        const filteredState = oldState.filter((item) => item.id != cartItem.id);
        item.quantity++;
        return [...filteredState, item];
      } else {
        cartItem.quantity = 1;
        if (oldState) {
          return [...oldState, cartItem];
        } else {
          return [cartItem];
        }
      }
    });
  };

  const emptyCart = async () => {
    setCart([]);
  };

  const removeFromCart = async (cartItem_id) => {
    setCart((oldState) => oldState.filter((item) => item.id != cartItem_id));
  };
  const changeQuantity = (cartItem, quantity) => {
    setCart((oldState) =>
      oldState.map((item) => {
        if (item.id == cartItem.id) {
          item.quantity = quantity;
        }
        return item;
      })
    );
  };
  const onLogin = async (values) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });
    if (data) {
      if (data.user.email == import.meta.env.VITE_ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      setUserId(data.user.id);
      setEmail(data.user.email);
      setIsAuthenticated(true);
      setCart(() => (cartItems ? cartItems : []));
      navigate(Path.Home);
    }
    if (error) {
      throw error;
    }
  };

  const onRegister = async (values) => {
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
    });
    if (data) {
      if (data.user.email == "admin@admin.com") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      setUserId(data.user.id);
      setEmail(data.user.email);
      setIsAuthenticated(true);
      setCart([]);
      navigate(Path.Home);
    }
    if (error) {
      throw error;
    }
  };
  const onLogout = async () => {
    const { error } = await supabase.auth.signOut();
    setUserId(null);
    setEmail(null);
    setIsAdmin(false);
    setIsAuthenticated(false);
    navigate(Path.Login);
  };
  const value = {
    onLogin,
    onRegister,
    onLogout,
    emptyCart,
    addToCart,
    removeFromCart,
    changeQuantity,
    cart,
    userId,
    email,
    isAuthenticated,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
