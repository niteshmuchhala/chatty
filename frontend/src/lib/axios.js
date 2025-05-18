import axios from "axios";

// Use absolute URL for production
const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5001/api"
  : "https://chatty-backend-47kr.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
