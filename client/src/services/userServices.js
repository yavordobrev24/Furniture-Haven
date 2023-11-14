import { post } from "../lib/request";
const baseUrl = "http://localhost:3030/jsonstore/users";

export const login = async (data) => {
  const result = await post(baseUrl, data);
  console.log(result);
};
export const register = async (data) => {
  const result = await post(baseUrl, data);
  console.log(result);
};
