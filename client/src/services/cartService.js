import * as request from "../lib/request.js";
import { getSingleProduct } from "./furnitureService.js";

const baseUrl = `http://localhost:3030/data/carts`;

const getAllCarts = async () => {
  const result = await request.get(`${baseUrl}`);

  return result;
};
export const addToUserCart = async (furnitureId, cart) => {
  const furniture = await getSingleProduct(furnitureId);

  cart?.cartItems.push(furniture);
  const result = await request.put(`${baseUrl}/${cart._id}`, cart);
  return result;
};
export const createUserCart = async () => {
  const data = {
    cartItems: [],
  };
  const result = await request.post(baseUrl, data);

  return result;
};
export const removeCartItem = async (cartId, cartData, itemId) => {
  const filteredItems = cartData.cartItems.filter((i) => i._id !== itemId);
  cartData.cartItems = filteredItems;

  const result = await request.put(`${baseUrl}/${cartId}`, cartData);
  return result;
};

export const getUserCart = async (userId) => {
  const result = await getAllCarts();

  const r = result.find((c) => c._ownerId == userId);

  return r;
};
export const clearUserCart = async (cartId, cartData) => {
  cartData.cartItems = [];

  const result = await request.put(`${baseUrl}/${cartId}`, cartData);

  return result;
};
