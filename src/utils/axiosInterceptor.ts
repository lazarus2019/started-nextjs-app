import axios from 'axios';
import { DB_HOST } from 'config';

export const axiosInstance = axios.create({
  baseURL: `${DB_HOST}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

const setUpInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error)
  );
  axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
      const originalConfig = error.config;
      return Promise.reject(error);
    }
  );
};

export default setUpInterceptors;
