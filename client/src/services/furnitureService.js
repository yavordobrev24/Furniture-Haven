import { del, get, put, post } from "../lib/request";
const baseUrl = `http://localhost:3030/data/furniture`;
console.log(baseUrl);
export const getAllProducts = async () => {
  const result = await get(baseUrl);
  return result;
};

export const getSingleProduct = async (furnitureId) => {
  const result = await get(`${baseUrl}/${furnitureId}`);
  return result;
};
export const updateProduct = async (productId, data) => {
  const result = await put(`${baseUrl}/${productId}`, data);
  return result;
};
export const createProduct = async (data) => {
  const result = await post(baseUrl, data);
  return result;
};
export const deleteProduct = async (furnitureId) => {
  const result = await del(`${baseUrl}/${furnitureId}`);
  return result;
};
