import { PROD } from "./environment";
import axios, { AxiosError } from "axios";

export const axiosInstance = axios.create({
  baseURL: PROD ? import.meta.env.VITE_SERVER_URL : "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use(
  async config => {
    const token = localStorage.getItem("token");
    if (token) {
      const parsedToken = JSON.parse(token);
      config.headers.Authorization = `Bearer ${parsedToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
