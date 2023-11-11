export const login = async (data) => {
  const res = await fetch("http://localhost:3030/jsonstore/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  console.log(result);
};
export const register = async (data) => {
  const res = await fetch("http://localhost:3030/jsonstore/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  console.log(result);
};
