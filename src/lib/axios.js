import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL_API || "http://localhost:4000",                         
});
