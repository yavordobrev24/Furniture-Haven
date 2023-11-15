import { del, get, post, put } from "../lib/request";
const baseUrl = "http://localhost:3030/jsonstore/reviews";

export const getProductReviews = async (productId) => {
  const result = await get(baseUrl);
  return Object.values(result).filter((r) => r.productId === productId);
};
export const createReview = async (data) => {
  const result = await post(baseUrl, data);
  return result;
};

export const editReview = async (reviewId, data) => {
  const result = await put(`${baseUrl}/${reviewId}`, data);
  return result;
};
export const deleteReview = async (reviewId) => {
  await del(`${baseUrl}/${reviewId}`);
};
export const getSingleReview = async (reviewId) => {
  const result = await get(`${baseUrl}/${reviewId}`);
  return result;
};
