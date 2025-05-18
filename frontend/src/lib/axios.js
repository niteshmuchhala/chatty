import axios from "axios";

// use VITE_ env var (set in .env)
const BASE_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // needed if using cookies/auth headers
});
