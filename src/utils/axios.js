import axios from "axios";
import { useAuthStore } from "../features/Auth/AuthSlice";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/app/v1",
});

apiClient.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
