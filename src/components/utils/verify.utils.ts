import { jwtDecode } from "jwt-decode";

interface User {
  _id: string,
  username: string,
  email: string,
  role: [],
  theme: boolean,
  iat: number,
  exp: number
}

export const decodeToken = (token: string): User => {
  const decode : User = jwtDecode(token);
  localStorage.setItem("user", JSON.stringify(decode));
  return decode;
};
