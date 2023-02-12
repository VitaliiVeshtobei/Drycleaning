import axios from "axios";

export const api = () =>
  (axios.defaults.baseURL = "http://localhost:4000/api/");

// export const setAuthHeader = (token: string) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };
