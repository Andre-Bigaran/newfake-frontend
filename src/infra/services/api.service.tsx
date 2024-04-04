import axios from "axios";
import Cookies from "js-cookie";
import { notification } from "antd";

export const URLFiles = process?.env?.NEXT_PUBLIC_API?.replace("/api", "");

const api = () => {
  const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_API,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(function (config) {
    const token = Cookies.get("NEWFAKE$S");
    if (token && config.url !== "/auth/local") {
      const sessionParsed = JSON.parse(token);
      if (sessionParsed && sessionParsed.token) {
        config.headers.Authorization = `Bearer ${sessionParsed.token}`;
      }
    }

    return config;
  });

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const status = error?.response?.status;
      if (window && status === 401 && error?.config?.url !== "/sessions") {
        notification.error({
          message: "Por favor, faça o login para continuar",
        });
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default api();
