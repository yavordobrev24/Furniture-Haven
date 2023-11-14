import { get } from "../lib/request";
const baseUrl = "http://localhost:3030/jsonstore/furniture";

export const getAllProducts = async () => {
  const result = await get(baseUrl);
  return Object.values(result);
};

export const getSingleProduct = async (furnitureId) => {
  const result = await get(`${baseUrl}/${furnitureId}`);
  return result;
};
