import axios from "axios";
import { useAuthStore } from "../features/Auth/AuthSlice";

const userApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/users`,
});

userApi.interceptors.request.use(
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

const projectApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/api/v1/projects`,
});
projectApi.interceptors.request.use(
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
export { userApi, projectApi };
