import * as request from "../lib/request.js";

export const login = async (email, password) => {
  const result = await request.post("/users/login", { email, password });
  return result;
};
export const register = async (username, email, password) => {
  let result = await request.post("/users/register", {
    username,
    email,
    password,
  });

  return result;
};
export const logout = async () => await request.get("/users/logout");
