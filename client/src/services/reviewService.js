import { del, get, post, put } from "../lib/request";
const url = "/data/reviews";

export const getProductReviews = async (productId) => {
  const result = await get(url);
  return Object.values(result).filter((r) => r.productId === productId);
};
export const createReview = async (data) => {
  const result = await post(url, data);
  return result;
};

export const editReview = async (reviewId, data) => {
  const result = await put(`${url}/${reviewId}`, data);
  return result;
};
export const deleteReview = async (reviewId) => {
  await del(`${url}/${reviewId}`);
};
export const getSingleReview = async (reviewId) => {
  const result = await get(`${url}/${reviewId}`);
  return result;
};
