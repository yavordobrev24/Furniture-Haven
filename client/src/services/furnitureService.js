import { get } from "../lib/request";

export const getAllProducts = async () => {
  const result = await get("/data/furniture");
  return result;
};

export const getSingleProduct = async (furnitureId) => {
  const result = await get(`/data/furniture/${furnitureId}`);
  return result;
};
