import { get } from "../lib/request";
const baseUrl = "http://localhost:3030/jsonstore/reviews";

export const getProductReviews = async (productId) => {
  const result = await get(baseUrl);
  return Object.values(result).filter((r) => r.productId === productId);
};
