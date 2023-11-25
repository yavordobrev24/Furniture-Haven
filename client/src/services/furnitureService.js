import { get } from "../lib/request";
const baseUrl = "http://localhost:3030/data/furniture";

export const getAllProducts = async () => {
  const result = await get(baseUrl);
  return result;
};

export const getSingleProduct = async (furnitureId) => {
  const result = await get(`${baseUrl}/${furnitureId}`);
  return result;
};
